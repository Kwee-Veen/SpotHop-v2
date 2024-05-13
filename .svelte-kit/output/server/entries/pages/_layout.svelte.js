import { c as create_ssr_component, a as subscribe, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { s as subTitle, c as currentSession } from "../../chunks/stores.js";
const Heading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $subTitle, $$unsubscribe_subTitle;
  $$unsubscribe_subTitle = subscribe(subTitle, (value) => $subTitle = value);
  $$unsubscribe_subTitle();
  return `<div class="box has-background-link-dark"><div class="columns is-mobile has-text-centered has-text-black"><div class="column is-2"></div> <div class="column is-1" data-svelte-h="svelte-15bduth"><div class="box"><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M320 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM125.7 175.5c9.9-9.9 23.4-15.5 37.5-15.5c1.9 0 3.8 .1 5.6 .3L137.6 254c-9.3 28 1.7 58.8 26.8 74.5l86.2 53.9-25.4 88.8c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l28.7-100.4c5.9-20.6-2.6-42.6-20.7-53.9L238 299l30.9-82.4 5.1 12.3C289 264.7 323.9 288 362.7 288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H362.7c-12.9 0-24.6-7.8-29.5-19.7l-6.3-15c-14.6-35.1-44.1-61.9-80.5-73.1l-48.7-15c-11.1-3.4-22.7-5.2-34.4-5.2c-31 0-60.8 12.3-82.7 34.3L57.4 153.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l23.1-23.1zM91.2 352H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h69.6c19 0 36.2-11.2 43.9-28.5L157 361.6l-9.5-6c-17.5-10.9-30.5-26.8-37.9-44.9L91.2 352z"></path></svg></span></div></div> <div class="column is-1"></div> <div class="column is-4"><h1 class="title"><div class="box">${escape($subTitle)}</div></h1></div> <div class="column is-1"></div> <div class="column is-1" data-svelte-h="svelte-uw10xn"><div class="box"><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152V422.8c0 9.8-6 18.6-15.1 22.3L416 503V200.4zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6V451.8L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77V504.3L192 449.4V255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"></path></svg></span></div></div> <div class="column is-2"></div></div></div>`;
});
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentSession, $$unsubscribe_currentSession;
  $$unsubscribe_currentSession = subscribe(currentSession, (value) => $currentSession = value);
  $$unsubscribe_currentSession();
  return `<nav class="navbar is-full-width"><div class="container"><div class="navbar-brand"><a class="navbar-item" href="/create"><span class="icon" data-svelte-h="svelte-1j9bdsx"><i class="fas fa-map-marker-alt"></i></span> <span><strong>Welcome ${escape($currentSession.name)}</strong></span></a></div> <div id="navbarMenu" class="navbar-menu"><div class="navbar-end"><a class="navbar-item" href="/create" data-svelte-h="svelte-p8qpoc">Create Spot</a> <a class="navbar-item" href="/report" data-svelte-h="svelte-1wjcy32">View Reports</a> <a class="navbar-item" href="/maps" data-svelte-h="svelte-12742nq">Maps</a> <a class="navbar-item" href="/logout">Logout ${escape($currentSession.name)}</a></div> <div></div></div></div></nav>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentSession, $$unsubscribe_currentSession;
  $$unsubscribe_currentSession = subscribe(currentSession, (value) => $currentSession = value);
  $$unsubscribe_currentSession();
  return `<div class="container">${$currentSession?.token ? `${validate_component(Menu, "Menu").$$render($$result, {}, {}, {})} ${validate_component(Heading, "Heading").$$render($$result, {}, {}, {})}` : ``} ${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Layout as default
};
