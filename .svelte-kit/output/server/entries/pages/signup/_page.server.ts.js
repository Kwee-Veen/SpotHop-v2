import { g as goto } from "../../../chunks/client.js";
import { s as spotService } from "../../../chunks/spot-service.js";
import validator from "validator";
const actions = {
  signup: async ({ request }) => {
    const form = await request.formData();
    let firstName = form.get("firstName");
    let lastName = form.get("lastName");
    let email = form.get("email");
    let password = form.get("password");
    let user = { admin: false };
    user.firstName = firstName;
    user.lastName = lastName;
    if (validator.isEmail(email)) {
      user.email = email;
    }
    user.password = password;
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
