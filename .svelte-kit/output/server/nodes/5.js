import * as server from '../entries/pages/image/_id_/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/image/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/image/[id]/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.5n0r7l-8.js","_app/immutable/chunks/scheduler.c2vh5_Kn.js","_app/immutable/chunks/index.DYvIg-GN.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/forms.BE_K5bEP.js","_app/immutable/chunks/spot-types.B5EZbF7N.js","_app/immutable/chunks/index.CjWkCWgi.js","_app/immutable/chunks/stores.B-gPtvMu.js"];
export const stylesheets = [];
export const fonts = [];
