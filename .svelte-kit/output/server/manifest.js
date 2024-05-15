export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","spot-image.png","spotHop_init.jpg","spotHop_init2.jpg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.DQM-iNEy.js","app":"_app/immutable/entry/app.DdZEBqLy.js","imports":["_app/immutable/entry/start.DQM-iNEy.js","_app/immutable/chunks/entry.DGZ7cyHH.js","_app/immutable/chunks/scheduler.Cu599fRN.js","_app/immutable/chunks/index.CTqb_wZB.js","_app/immutable/entry/app.DdZEBqLy.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/scheduler.Cu599fRN.js","_app/immutable/chunks/index.Ddz2UO3O.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/create",
				pattern: /^\/create\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/logout",
				pattern: /^\/logout\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/maps",
				pattern: /^\/maps\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/report",
				pattern: /^\/report\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/signup",
				pattern: /^\/signup\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
