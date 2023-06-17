// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import type { SveltekitSession } from "@sveltekit-statefull-session/core";
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
		interface Locals {
			session: SveltekitSession<Session>;
		}
	}
	type Session = {
		user:any
	}
}

export {};
