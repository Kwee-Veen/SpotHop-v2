import { g as goto } from "../../../chunks/client.js";
import { s as spotService } from "../../../chunks/spot-service.js";
const actions = {
  signup: async ({ request }) => {
    const form = await request.formData();
    let user = {
      firstName: form.get("firstName"),
      lastName: form.get("lastName"),
      email: form.get("email"),
      password: form.get("password"),
      admin: false
    };
    const success = await spotService.signup(user);
    if (!success) {
      return;
    } else {
      goto();
      return;
    }
  }
};
export {
  actions
};
