// @ts-nocheck
import { spotService } from "$lib/services/spot-service";
import type { Session } from "$lib/types/spot-types";
import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const ssr = false;

export const load = async ({ }: Parameters<PageServerLoad>[0]) => {
  return {
    spots: await spotService.getSpots(),
  };
};

export const actions = {
  create: async ({ request, cookies }) => {
    const cookieStr = cookies.get("spot-user") as string;
    if (cookieStr) {
      const session = JSON.parse(cookieStr) as Session;
      if (session) {
        const form = await request.formData();
        const spot = {
          name: form.get("name") as unknown as string,
          category: form.get("category") as string,
          latitude: form.get("latitude") as unknown as number,
          longitude: form.get("longitude") as unknown as number,
          description: form.get("description") as unknown as string,
          userid: session._id
        };
        spotService.createSpot(spot);
      }
    }
  },
  delete: async ({ request, cookies }) => {
    const cookieStr = cookies.get("spot-user") as string;
    if (cookieStr) {
      const form = await request.formData();
      const id = form.get("deleteSpotId") as string;
      await spotService.deleteSpot(id);
      console.log("Deleted spot: " + id);
    }
  },

  edit: async ({ request, cookies }) => {
    const cookieStr = cookies.get("spot-user") as string;
    if (cookieStr) {
      const form = await request.formData();
      const id = form.get("editSpotId") as string;
      console.log("Editing spot: " + id);
      redirect(301, "/edit/" + id);
    }
    return
  },

  image: async ({ request, cookies }) => {
    const cookieStr = cookies.get("spot-user") as string;
    if (cookieStr) {
      const form = await request.formData();
      const id = form.get("spotImageId") as string;
      const spot = await spotService.getSpotById(id);
      console.log("Editing images of spot: " + spot?.name);
      redirect(301, "/image/" + id);
    }
    return
  },
};