import path from 'path';

import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
	modules: ['@wxt-dev/module-react'],
	srcDir: 'src',
	manifest: {
		name: '4Assist',
		description: 'Your personal assistand for enhanced ServiceNow experience.',
		permissions: ['sidePanel', 'storage'],
		side_panel: {
			default_path: 'sidepanel.html'
		},
		host_permissions: []
	},
	vite: () => ({
		plugins: [tailwindcss()],
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './src')
			}
		}
	})
});
