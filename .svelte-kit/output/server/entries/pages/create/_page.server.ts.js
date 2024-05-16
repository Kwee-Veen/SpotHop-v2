import { s as spotService } from "../../../chunks/spot-service.js";
import { r as redirect } from "../../../chunks/index.js";
const ssr = false;
const load = async ({}) => {
  return {
    spots: await spotService.getSpots()
  };
};
const actions = {
  create: async ({ request, cookies }) => {
    const cookieStr = cookies.get("spot-user");
    if (cookieStr) {
      const session = JSON.parse(cookieStr);
      if (session) {
        const form = await request.formData();
        const spot = {
          name: form.get("name"),
          category: form.get("category"),
          latitude: form.get("latitude"),
          longitude: form.get("longitude"),
          description: form.get("description"),
          userid: session._id
        };
        spotService.createSpot(spot);
      }
    }
  },
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
  load,
  ssr
};
