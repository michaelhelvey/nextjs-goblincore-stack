import type { ChildProcessWithoutNullStreams } from 'node:child_process'

export class ProcessWatcher {
	private outputQueue: string[] = []

	// TODO: fix these linting errors
	constructor(
		// eslint-disable-next-line no-unused-vars
		public readonly proc: ChildProcessWithoutNullStreams,
		// eslint-disable-next-line no-unused-vars
		private readonly timeout = 4000
	) {}

	public waitFor(matcher: RegExp): Promise<string> {
		// Before even waiting, look in the output queue to see if we already have it:
		for (const item of this.outputQueue) {
			if (matcher.test(item)) {
				return Promise.resolve(item)
			}
		}

		// Otherwise, wait via a promise for stdout
		return new Promise((resolve, reject) => {
			const timeout = setTimeout(
				() => reject(`Timed out waiting for ${String(matcher)}`),
				this.timeout
			)

			this.proc.on('error', (cause) => {
				reject(cause)
			})

			this.proc.stdout.on('data', (chunk: Buffer) => {
				const output = chunk.toString()
				this.outputQueue.push(output)

				if (matcher.test(output)) {
					clearTimeout(timeout)
					resolve(output)
				}
			})
		})
	}
}
