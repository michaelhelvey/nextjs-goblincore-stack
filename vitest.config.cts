import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	test: {
		globals: true,
		include: ['**/**{test,spec}.{ts,tsx}'],
		exclude: ['**/e2e/**', '**/node_modules/**'],
		environment: 'happy-dom',
		setupFiles: './scripts/setup-test-env.ts',
		coverage: {
			provider: 'istanbul',
		},
	},
})
