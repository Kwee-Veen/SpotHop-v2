import { s as spotService } from "../../../chunks/spot-service.js";
import { r as redirect } from "../../../chunks/index.js";
import validator from "validator";
import bcrypt from "bcrypt";
const actions = {
  signup: async ({ request }) => {
    const form = await request.formData();
    let firstName = form.get("firstName");
    let lastName = form.get("lastName");
    let email = form.get("email");
    let password = form.get("password");
    let user = { admin: false, hash: "" };
    let errorFlag = false;
    if (validator.isAlpha(firstName))
      user.firstName = firstName;
    else {
      console.log(firstName + " has invalid characters. User not created.");
      errorFlag = true;
    }
    if (validator.isAlpha(lastName))
      user.lastName = lastName;
    else {
      console.log(lastName + " has invalid characters. User not created.");
      errorFlag = true;
    }
    const nonBlacklistCharsEmail = validator.blacklist(email, `^[p{L}p{Zs}]+$`);
    if (nonBlacklistCharsEmail)
      email = nonBlacklistCharsEmail;
    else {
      console.log("Error while performing email character blacklisting");
    }
    const escapedCharsEmail = validator.escape(email);
    if (escapedCharsEmail)
      email = escapedCharsEmail;
    else {
      console.log("Error while performing email character escaping");
    }
    const normalizedEmail = validator.normalizeEmail(email);
    if (normalizedEmail)
      email = normalizedEmail;
    else {
      console.log("Error while performing email character normalisation");
    }
    if (validator.isEmail(email))
      user.email = email;
    else {
      console.log(email + " is invalid, user not created.");
      errorFlag = true;
    }
    if (validator.isStrongPassword(password))
      user.password = password;
    else {
      console.log(password + " is not a valid strong password. User not created.");
      errorFlag = true;
    }
    const hash = bcrypt.hashSync(user.password, 10);
    if (hash && !errorFlag) {
      user.hash = hash;
      console.log("password hashed and salted successfully as " + user.hash);
    } else {
      console.log("Password was not hashed and salted");
      errorFlag = true;
    }
    if (!errorFlag) {
      const success = await spotService.signup(user);
      if (!success) {
        console.log("Did not create new user because reasons");
        return;
      } else {
        console.log("Successfully created new user " + user.firstName + ", " + user.lastName + ", " + user.email + ", " + user.hash);
        redirect(301, "/login");
      }
    } else
      console.log("Did not create new user because reasons");
    return;
  }
};
export {
  actions
};
