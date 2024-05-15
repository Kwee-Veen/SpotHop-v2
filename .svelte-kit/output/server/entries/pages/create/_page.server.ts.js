import { s as spotService } from "../../../chunks/spot-service.js";
const ssr = false;
const load = async ({ parent }) => {
  const { session } = await parent();
  if (session) {
    return {
      spots: await spotService.getSpots(session)
    };
  }
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
        spotService.createSpot(spot, session);
      }
    }
  }
};
export {
  actions,
  load,
  ssr
};
