import { defineConfig } from "vitest/config";

export default defineConfig(
	({ mode }: { mode: string }) => ({
		test: {
			setupFiles: ['./vitestSetup.ts'],
			globals: true,
			environment: "jsdom",
			include: ["src/**/*.test.ts"],
			env: {
				VITEST_MODE: mode, // pass mode as an env variable
			},
		},
	})
);
