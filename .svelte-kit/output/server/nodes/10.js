import * as server from '../entries/pages/signup/_page.server.ts.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/signup/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/signup/+page.server.ts";
export const imports = ["_app/immutable/nodes/10.D-zan8Qe.js","_app/immutable/chunks/scheduler.c2vh5_Kn.js","_app/immutable/chunks/index.DYvIg-GN.js","_app/immutable/chunks/UserCredentials.Bap2Bjkl.js","_app/immutable/chunks/forms.BE_K5bEP.js","_app/immutable/chunks/spot-types.B5EZbF7N.js","_app/immutable/chunks/index.CjWkCWgi.js"];
export const stylesheets = [];
export const fonts = [];
