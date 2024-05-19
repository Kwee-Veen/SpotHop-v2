import * as server from '../entries/pages/report/_page.server.ts.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/report/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/report/+page.server.ts";
export const imports = ["_app/immutable/nodes/9.C-0tRvXv.js","_app/immutable/chunks/scheduler.Dda-Ubu_.js","_app/immutable/chunks/index.BUOivlNn.js","_app/immutable/chunks/stores.DUKXx1u7.js","_app/immutable/chunks/index.qojeiD3T.js","_app/immutable/chunks/SpotList.DbOgukCJ.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/forms.5rdNBL9U.js","_app/immutable/chunks/spot-types.D-wtOG_6.js","_app/immutable/chunks/Chart.De-Ru-V4.js"];
export const stylesheets = ["_app/immutable/assets/9.DQXiSSqs.css","_app/immutable/assets/Chart.BnxTEXOb.css"];
export const fonts = [];
