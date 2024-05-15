import { D as DEV, r as redirect } from "../../../chunks/index.js";
import { s as spotService } from "../../../chunks/spot-service.js";
const dev = DEV;
const actions = {
  login: async ({ request, cookies }) => {
    const form = await request.formData();
    const email = form.get("email");
    const password = form.get("password");
    if (email === "" || password === "") {
      throw redirect(307, "/");
    } else {
      console.log(`attemting to log in email: ${email} with password: ${password}`);
      const session = await spotService.login(email, password);
      if (session) {
        const userJson = JSON.stringify(session);
        cookies.set("spot-user", userJson, {
          path: "/",
          httpOnly: true,
          sameSite: "strict",
          secure: !dev,
          maxAge: 60 * 60 * 24 * 7
          // one week
        });
        throw redirect(303, "/report");
      } else {
        throw redirect(307, "/");
      }
    }
  }
};
export {
  actions
};
