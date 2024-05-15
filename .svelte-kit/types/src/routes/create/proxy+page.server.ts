// @ts-nocheck
import { spotService } from "$lib/services/spot-service";
import type { Session } from "$lib/types/spot-types";
import type { PageServerLoad } from "./$types";

export const ssr = false;

export const load = async ({ parent }: Parameters<PageServerLoad>[0]) => {
  const { session } = await parent();
  if (session) {
    return {
      spots: await spotService.getSpots(session!),
    };
  }
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
        spotService.createSpot(spot, session);
      }
    }
  }
};