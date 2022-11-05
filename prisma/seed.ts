/* eslint-disable no-console */
import { encryptPassword } from '@server/auth'
import { db } from '@server/db'

async function main() {
	await db.user.create({
		data: {
			firstName: 'Rupert',
			lastName: 'Stiltskin',
			email: 'rupert@starter.com',
			passwords: {
				create: [
					{
						hash: await encryptPassword('1234'),
					},
				],
			},
		},
	})
}

main()
	.then(() => {
		console.log('🌱 Database successfully seeded')
	})
	.catch((e) => {
		console.error(`Seeding the database failed with error: ${String(e)}`)
	})
