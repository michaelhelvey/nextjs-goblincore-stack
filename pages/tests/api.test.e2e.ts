import { ProcessWatcher } from '@lib/test-helpers'
import { microtest } from '@michaelhelvey/microtest'
import { spawn } from 'node:child_process'

let watcher: ProcessWatcher

const startServer = () => {
	return spawn('pnpm', ['start-test-server'])
}

beforeAll(async () => {
	watcher = new ProcessWatcher(startServer())
	await watcher.waitFor(/compiled client and server successfully/i)
})

afterAll(() => {
	watcher.proc.kill('SIGINT')
})

const request = microtest('http://localhost:9001')

test('/hello returns a name', async () => {
	const response = await request((ctx) => ctx.get('/api/hello'))
		.status(200)
		.json<{ name: string }>()
	expect(response.name).toEqual('John Doe')
})
