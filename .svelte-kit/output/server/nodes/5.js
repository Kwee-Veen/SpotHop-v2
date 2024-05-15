import * as server from '../entries/pages/logout/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/logout/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/logout/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.Bi1xWk-Y.js","_app/immutable/chunks/scheduler.Cu599fRN.js","_app/immutable/chunks/index.Ddz2UO3O.js","_app/immutable/chunks/entry.DGZ7cyHH.js","_app/immutable/chunks/index.CTqb_wZB.js","_app/immutable/chunks/stores.B6dslbLl.js"];
export const stylesheets = [];
export const fonts = [];
