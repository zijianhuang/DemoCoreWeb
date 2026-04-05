import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [react()],
	base: '/DemoCoreWeb/react/',
	build: {
		outDir: 'build/DemoCoreWeb/react',
		emptyOutDir: true,
	},
});
