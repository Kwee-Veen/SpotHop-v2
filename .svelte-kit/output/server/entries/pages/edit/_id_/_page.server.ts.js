import { s as spotService } from "../../../../chunks/spot-service.js";
import { r as redirect } from "../../../../chunks/index.js";
const load = async ({ cookies, params }) => {
  const cookieStr = cookies.get("spot-user");
  if (cookieStr) {
    const id = encodeURI(params.id);
    console.log("stored id: " + id);
    const spot = await spotService.getSpotById(id);
    console.log(spot);
    return { spot };
  }
};
const actions = {
  edit: async ({ request, cookies }) => {
    const cookieStr = cookies.get("spot-user");
    if (cookieStr) {
      const session = JSON.parse(cookieStr);
      const form = await request.formData();
      const id = form.get("editSpotId");
      const oldSpot = await spotService.getSpotById(id);
      const newspot = {
        name: form.get("name"),
        category: form.get("category"),
        latitude: form.get("latitude"),
        longitude: form.get("longitude"),
        description: form.get("description"),
        userid: session._id
      };
      if (oldSpot !== null)
        spotService.editSpot(oldSpot, newspot);
      redirect(301, "/report");
    }
    return;
  }
};
export {
  actions,
  load
};
