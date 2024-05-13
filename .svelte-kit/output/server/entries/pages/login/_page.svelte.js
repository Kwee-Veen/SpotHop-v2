import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import "../../../chunks/client.js";
import { U as UserCredentials } from "../../../chunks/UserCredentials.js";
const LoginForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email = "";
  let password = "";
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${``} <form>${validate_component(UserCredentials, "UserCredentials").$$render(
      $$result,
      { email, password },
      {
        email: ($$value) => {
          email = $$value;
          $$settled = false;
        },
        password: ($$value) => {
          password = $$value;
          $$settled = false;
        }
      },
      {}
    )} <button class="button is-success is-fullwidth" data-svelte-h="svelte-1klwqp6">Log In</button></form>`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="hero is-fullheight"><div class="hero-body"><div class="container"><div class="column is-4 is-offset-4"><h3 class="title has-text-black has-text-centered" data-svelte-h="svelte-wzi93j">Login to SpotHop</h3> <div class="box">${validate_component(LoginForm, "LoginForm").$$render($$result, {}, {}, {})}</div></div></div></div></section>`;
});
export {
  Page as default
};
