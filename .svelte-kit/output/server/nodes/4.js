import * as server from '../entries/pages/edit/_id_/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/edit/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/edit/[id]/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.CzQa6eNc.js","_app/immutable/chunks/scheduler.c2vh5_Kn.js","_app/immutable/chunks/index.DYvIg-GN.js","_app/immutable/chunks/forms.C20sHwFD.js","_app/immutable/chunks/spot-types.BzuGVn5o.js","_app/immutable/chunks/index.CjWkCWgi.js","_app/immutable/chunks/stores.B-gPtvMu.js"];
export const stylesheets = [];
export const fonts = [];
