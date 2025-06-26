import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	base: '/', // Ensure base URL is set correctly
	build: {
		sourcemap: true,
		outDir: 'dist',
	},
});
