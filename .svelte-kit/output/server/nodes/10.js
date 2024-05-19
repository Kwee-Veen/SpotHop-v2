import * as server from '../entries/pages/signup/_page.server.ts.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/signup/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/signup/+page.server.ts";
export const imports = ["_app/immutable/nodes/10.BE6kCZX1.js","_app/immutable/chunks/scheduler.BugHMGPi.js","_app/immutable/chunks/index.BS6YZX3e.js","_app/immutable/chunks/UserCredentials.D2qUAUCj.js","_app/immutable/chunks/forms.DZcjlgCB.js","_app/immutable/chunks/spot-types.DlnyQnQA.js","_app/immutable/chunks/index.CU6_92KO.js"];
export const stylesheets = [];
export const fonts = [];
