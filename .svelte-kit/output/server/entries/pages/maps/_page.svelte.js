import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { C as Card } from "../../../chunks/Card.js";
import { s as subTitle } from "../../../chunks/stores.js";
import { L as LeafletMap } from "../../../chunks/LeafletMap.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  subTitle.set("Spot Maps");
  let { data } = $$props;
  let map1;
  let map2;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
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
          {
            height: 65,
            data,
            id: "firstMap",
            activeLayer: "Transportation",
            zoom: 7,
            this: map1
          },
          {
            this: ($$value) => {
              map1 = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      }
    })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(LeafletMap, "LeafletMap").$$render(
          $$result,
          {
            height: 65,
            data,
            id: "secondMap",
            this: map2
          },
          {
            this: ($$value) => {
              map2 = $$value;
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
