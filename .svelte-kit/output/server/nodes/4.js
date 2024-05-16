import * as server from '../entries/pages/edit/_id_/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/edit/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/edit/[id]/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.BgSFuQrg.js","_app/immutable/chunks/scheduler.vKpMcqOq.js","_app/immutable/chunks/index.D9X9x838.js","_app/immutable/chunks/forms.D75PdG6S.js","_app/immutable/chunks/entry.Bydg3Dmk.js","_app/immutable/chunks/index.Dj5UrllC.js","_app/immutable/chunks/stores.DM0AiXp9.js"];
export const stylesheets = [];
export const fonts = [];
