import { s as spotService } from "../../../chunks/spot-service.js";
import { r as redirect } from "../../../chunks/index.js";
const load = async ({}) => {
  return {
    spots: await spotService.getSpots(),
    users: await spotService.getUsers(),
    userSpots: await spotService.getUserSpotCount()
  };
};
const actions = {
  delete: async ({ request, cookies }) => {
    const cookieStr = cookies.get("spot-user");
    if (cookieStr) {
      const form = await request.formData();
      const id = form.get("deleteSpotId");
      await spotService.deleteSpot(id);
      console.log("Deleted spot: " + id);
    }
  },
  edit: async ({ request, cookies }) => {
    const cookieStr = cookies.get("spot-user");
    if (cookieStr) {
      const form = await request.formData();
      const id = form.get("editSpotId");
      console.log("Editing spot: " + id);
      redirect(301, "/edit/" + id);
    }
    return;
  }
};
export {
  actions,
  load
};
