// @ts-nocheck
import type { Session } from "$lib/types/spot-types";
import type { LayoutServerLoad } from "./$types";

export const load = ({ cookies }: Parameters<LayoutServerLoad>[0]) => {
  const cookieStr = cookies.get("spot-user") as string;
  if (cookieStr) {
    const session = JSON.parse(cookieStr) as Session;
    return {
      session: session
    };
  }
};