import * as server from '../entries/pages/edit/_id_/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/edit/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/edit/[id]/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.BRTIYG_D.js","_app/immutable/chunks/scheduler.BugHMGPi.js","_app/immutable/chunks/index.BS6YZX3e.js","_app/immutable/chunks/forms.DZcjlgCB.js","_app/immutable/chunks/spot-types.DlnyQnQA.js","_app/immutable/chunks/index.CU6_92KO.js","_app/immutable/chunks/stores.Cwdn6BQi.js"];
export const stylesheets = [];
export const fonts = [];
