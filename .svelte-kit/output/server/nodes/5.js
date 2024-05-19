import * as server from '../entries/pages/image/_id_/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/image/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/image/[id]/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.DOSe1pIE.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/scheduler.Dda-Ubu_.js","_app/immutable/chunks/index.BUOivlNn.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/forms.B_ddXdL2.js","_app/immutable/chunks/spot-types.F7SilOE-.js","_app/immutable/chunks/index.qojeiD3T.js","_app/immutable/chunks/stores.DUKXx1u7.js","_app/immutable/chunks/Chart.De-Ru-V4.js","_app/immutable/chunks/LeafletMap.DbM4DCBW.js","_app/immutable/chunks/leaflet-src.BCgUuAGh.js"];
export const stylesheets = ["_app/immutable/assets/5.D0Hb4heR.css","_app/immutable/assets/Chart.BnxTEXOb.css"];
export const fonts = [];
