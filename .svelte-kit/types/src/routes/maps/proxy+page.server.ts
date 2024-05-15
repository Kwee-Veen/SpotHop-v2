// @ts-nocheck
import { spotService } from "$lib/services/spot-service";
import type { PageServerLoad } from "./$types";

export const load = async ({ }: Parameters<PageServerLoad>[0]) => {
  return {
    spots: await spotService.getSpots(),
  };
};
