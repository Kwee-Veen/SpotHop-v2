import * as server from '../entries/pages/logout/_page.server.ts.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/logout/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/logout/+page.server.ts";
export const imports = ["_app/immutable/nodes/7.Bruuo8YP.js","_app/immutable/chunks/scheduler.c2vh5_Kn.js","_app/immutable/chunks/index.DYvIg-GN.js","_app/immutable/chunks/spot-types.B5EZbF7N.js","_app/immutable/chunks/index.CjWkCWgi.js","_app/immutable/chunks/stores.B-gPtvMu.js"];
export const stylesheets = [];
export const fonts = [];
