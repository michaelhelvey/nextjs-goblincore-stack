import type { ChildProcessWithoutNullStreams } from 'node:child_process'

export class ProcessWatcher {
	constructor(
		public readonly proc: ChildProcessWithoutNullStreams,
		private readonly timeout = 4000
	) {}

	public waitFor(matcher: RegExp): Promise<string> {
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
				if (matcher.test(output)) {
					clearTimeout(timeout)
					resolve(output)
				}
			})
		})
	}
}
