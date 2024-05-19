import { D as DEV } from "../../../chunks/prod-ssr.js";
import { u as userStore, s as spotService } from "../../../chunks/spot-service.js";
import { r as redirect } from "../../../chunks/index.js";
import bcrypt from "bcrypt";
const dev = DEV;
const actions = {
  login: async ({ request, cookies }) => {
    const form = await request.formData();
    const email = form.get("email");
    const userRecord = await userStore.getUserByEmail(email);
    let password = form.get("password");
    if (email === "" || password === "") {
      throw redirect(307, "/");
    } else {
      if (userRecord && password) {
        if (bcrypt.compareSync(password, userRecord.hash))
          password = userRecord.password;
      }
      console.log(`attemting to log in email: ${email} with hashed password: ${userRecord?.hash}`);
      let session;
      session = await spotService.login(email, password);
      if (session) {
        const userJson = JSON.stringify(session);
        cookies.set("spot-user", userJson, {
          path: "/",
          httpOnly: true,
          sameSite: "strict",
          secure: !dev,
          maxAge: 60 * 60 * 24 * 7
        });
        throw redirect(303, "/report");
      }
    }
  }
};
export {
  actions
};
