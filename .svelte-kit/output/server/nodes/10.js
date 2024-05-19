import * as server from '../entries/pages/signup/_page.server.ts.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/signup/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/signup/+page.server.ts";
export const imports = ["_app/immutable/nodes/10.CiIP-VXp.js","_app/immutable/chunks/scheduler.Dda-Ubu_.js","_app/immutable/chunks/index.BUOivlNn.js","_app/immutable/chunks/UserCredentials.CES-yeoe.js","_app/immutable/chunks/forms.5rdNBL9U.js","_app/immutable/chunks/spot-types.D-wtOG_6.js","_app/immutable/chunks/index.qojeiD3T.js"];
export const stylesheets = [];
export const fonts = [];
