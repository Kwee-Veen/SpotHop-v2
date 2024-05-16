import { s as spotService } from "../../../chunks/spot-service.js";
const load = async ({}) => {
  return {
    spots: await spotService.getSpots()
  };
};
export {
  load
};
