import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { C as Card } from "../../../chunks/Card.js";
import { s as subTitle } from "../../../chunks/stores.js";
import { L as LeafletMap } from "../../../chunks/LeafletMap.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  subTitle.set("Map of Spots");
  let map;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(LeafletMap, "LeafletMap").$$render(
          $$result,
          { height: 65, this: map },
          {
            this: ($$value) => {
              map = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
