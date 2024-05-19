import * as server from '../entries/pages/create/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/create/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/create/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.CItVl8G8.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/scheduler.Dda-Ubu_.js","_app/immutable/chunks/index.BUOivlNn.js","_app/immutable/chunks/SpotList.uK9_xe43.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/forms.B_ddXdL2.js","_app/immutable/chunks/spot-types.F7SilOE-.js","_app/immutable/chunks/index.qojeiD3T.js","_app/immutable/chunks/stores.DUKXx1u7.js","_app/immutable/chunks/leaflet-src.BCgUuAGh.js"];
export const stylesheets = [];
export const fonts = [];
