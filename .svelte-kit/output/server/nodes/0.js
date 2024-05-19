import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.B_iwbTCk.js","_app/immutable/chunks/scheduler.BugHMGPi.js","_app/immutable/chunks/index.BS6YZX3e.js","_app/immutable/chunks/stores.Cwdn6BQi.js","_app/immutable/chunks/index.CU6_92KO.js"];
export const stylesheets = [];
export const fonts = [];
