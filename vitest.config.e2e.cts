import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
	plugins: [tsconfigPaths()],
	test: {
		globals: true,
		include: ['**/**{test,spec}.e2e.{ts,tsx}'],
		exclude: ['**/e2e/**', '**/node_modules/**'],
		coverage: {
			provider: 'istanbul',
		},
	},
})
