import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { s as subTitle } from "../../../../chunks/stores.js";
const UploadWidget = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<button data-svelte-h="svelte-1htj11q">Upload</button>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  subTitle.set("Edit Spot Images");
  return `<section><div class="container"><h2 data-svelte-h="svelte-1lxnpwq">Upload Image</h2> ${validate_component(UploadWidget, "UploadWidget").$$render($$result, {}, {}, {})}</div></section> `;
});
export {
  Page as default
};
