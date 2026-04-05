import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig(
	({ mode }) => ({
		plugins: [react()],
		base: '/DemoCoreWeb/react/',
		build: {
			outDir: 'build/DemoCoreWeb/react',
			emptyOutDir: true,
		},
		test: {
			setupFiles: ['./vitestSetup.ts'],
			globals: true,
			environment: 'jsdom',
			include: ['src/**/*.test.ts'],
			env: {
				VITEST_MODE: mode, // pass mode as an env variable
			},
		},
	})
);
