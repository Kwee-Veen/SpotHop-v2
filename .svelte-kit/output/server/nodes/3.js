import * as server from '../entries/pages/create/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/create/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/create/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.0t0C6iu7.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/scheduler.BugHMGPi.js","_app/immutable/chunks/index.BS6YZX3e.js","_app/immutable/chunks/SpotList.Gg_gE-qf.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/forms.DZcjlgCB.js","_app/immutable/chunks/spot-types.DlnyQnQA.js","_app/immutable/chunks/index.CU6_92KO.js","_app/immutable/chunks/stores.Cwdn6BQi.js","_app/immutable/chunks/LeafletMap.CMiL_xvh.js"];
export const stylesheets = ["_app/immutable/assets/LeafletMap.HupOsEJb.css"];
export const fonts = [];
