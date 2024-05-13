import { c as create_ssr_component } from "./ssr.js";
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="card mb-5 has-background-info-light"><div class="card-content"><div class="content">${slots.default ? slots.default({}) : ``}</div></div></div>`;
});
export {
  Card as C
};
