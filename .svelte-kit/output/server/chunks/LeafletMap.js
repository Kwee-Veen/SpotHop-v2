import { c as create_ssr_component, d as add_attribute, e as escape } from "./ssr.js";
import L from "leaflet";
const LeafletMap = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id = "home-map-id" } = $$props;
  let { height = 80 } = $$props;
  let { location = { lat: 53.2734, lng: -7.7783203 } } = $$props;
  let { zoom = 4 } = $$props;
  let { minZoom = 3 } = $$props;
  let { activeLayer = "Terrain" } = $$props;
  let imap;
  L.layerGroup([]);
  L.layerGroup([]);
  L.layerGroup([]);
  L.layerGroup([]);
  L.layerGroup([]);
  L.layerGroup([]);
  L.layerGroup([]);
  L.layerGroup([]);
  function addMarker(lat, lng, popupText) {
    const marker = L.marker([lat, lng]).addTo(imap);
    const popup = L.popup({ autoClose: false, closeOnClick: false });
    popup.setContent(popupText);
    marker.bindPopup(popup);
  }
  function moveTo(lat, lng) {
    imap.flyTo({ lat, lng });
  }
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.location === void 0 && $$bindings.location && location !== void 0)
    $$bindings.location(location);
  if ($$props.zoom === void 0 && $$bindings.zoom && zoom !== void 0)
    $$bindings.zoom(zoom);
  if ($$props.minZoom === void 0 && $$bindings.minZoom && minZoom !== void 0)
    $$bindings.minZoom(minZoom);
  if ($$props.activeLayer === void 0 && $$bindings.activeLayer && activeLayer !== void 0)
    $$bindings.activeLayer(activeLayer);
  if ($$props.addMarker === void 0 && $$bindings.addMarker && addMarker !== void 0)
    $$bindings.addMarker(addMarker);
  if ($$props.moveTo === void 0 && $$bindings.moveTo && moveTo !== void 0)
    $$bindings.moveTo(moveTo);
  return `<div${add_attribute("id", id, 0)} class="box" style="${"height: " + escape(height, true) + "vh"}"></div>`;
});
export {
  LeafletMap as L
};
