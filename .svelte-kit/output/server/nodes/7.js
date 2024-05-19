import * as server from '../entries/pages/logout/_page.server.ts.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/logout/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/logout/+page.server.ts";
export const imports = ["_app/immutable/nodes/7.DoJF6euZ.js","_app/immutable/chunks/scheduler.Dda-Ubu_.js","_app/immutable/chunks/index.BUOivlNn.js","_app/immutable/chunks/spot-types.D-wtOG_6.js","_app/immutable/chunks/index.qojeiD3T.js","_app/immutable/chunks/stores.DUKXx1u7.js"];
export const stylesheets = [];
export const fonts = [];
