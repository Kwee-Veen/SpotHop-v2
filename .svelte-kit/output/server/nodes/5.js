import * as server from '../entries/pages/login/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/login/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/login/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.B6vLf2RH.js","_app/immutable/chunks/scheduler.vKpMcqOq.js","_app/immutable/chunks/index.D9X9x838.js","_app/immutable/chunks/UserCredentials.Dedq44ie.js"];
export const stylesheets = [];
export const fonts = [];
