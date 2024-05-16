import { spotService } from "$lib/services/spot-service";
import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ }) => {
  return {
    spots: await spotService.getSpots(),
    users: await spotService.getUsers(),
    userSpots: await spotService.getUserSpotCount()
  };
};

export const actions = {
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
};