import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import  path from "node:path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export default defineConfig({
	plugins: [sveltekit()],
	resolve:{
		alias:{
			"bootstrap":path.resolve(__dirname, 'node_modules/bootstrap'),
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
