import * as server from '../entries/pages/login/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/login/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/login/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.LU_9vElE.js","_app/immutable/chunks/scheduler.Cu599fRN.js","_app/immutable/chunks/index.Ddz2UO3O.js","_app/immutable/chunks/UserCredentials.dNd8W2NG.js"];
export const stylesheets = [];
export const fonts = [];
