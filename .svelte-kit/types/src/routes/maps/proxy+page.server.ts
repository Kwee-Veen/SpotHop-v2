// @ts-nocheck
import { spotService } from "$lib/services/spot-service";
import type { PageServerLoad } from "./$types";

export const load = async ({ parent }: Parameters<PageServerLoad>[0]) => {
  const { session } = await parent();
  if (session) {
    return {
      spots: await spotService.getSpots(session!),
    };
  }
};
