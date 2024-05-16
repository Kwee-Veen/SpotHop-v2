import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.DayZtL_v.js","_app/immutable/chunks/scheduler.vKpMcqOq.js","_app/immutable/chunks/index.D9X9x838.js","_app/immutable/chunks/stores.DM0AiXp9.js","_app/immutable/chunks/index.Dj5UrllC.js"];
export const stylesheets = [];
export const fonts = [];
