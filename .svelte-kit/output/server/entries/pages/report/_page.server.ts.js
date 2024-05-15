import { s as spotService } from "../../../chunks/spot-service.js";
const load = async ({ parent }) => {
  const { session } = await parent();
  if (session) {
    return {
      spots: await spotService.getSpots(session),
      users: await spotService.getUsers(session),
      userSpots: await spotService.getUserSpotCount(session)
    };
  }
};
export {
  load
};
