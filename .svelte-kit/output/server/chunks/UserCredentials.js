import { c as create_ssr_component, d as add_attribute } from "./ssr.js";
const UserCredentials = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { email = "" } = $$props;
  let { password = "" } = $$props;
  if ($$props.email === void 0 && $$bindings.email && email !== void 0)
    $$bindings.email(email);
  if ($$props.password === void 0 && $$bindings.password && password !== void 0)
    $$bindings.password(password);
  return `<div class="field"> <label class="label" data-svelte-h="svelte-adsx43">Email</label> <div class="control has-icons-left"><input class="input" type="text" placeholder="Email" name="email"${add_attribute("value", email, 0)}> <span class="icon is-small is-left" data-svelte-h="svelte-pb8g87"><i class="fa fa-envelope"></i></span></div></div> <div class="field"> <label class="label" data-svelte-h="svelte-z2bh7c">Password</label> <div class="control has-icons-left"><input class="input" type="password" placeholder="Password" name="password"${add_attribute("value", password, 0)}> <span class="icon is-small is-left" data-svelte-h="svelte-1spi9as"><i class="fa fa-key"></i></span></div></div>`;
});
export {
  UserCredentials as U
};
