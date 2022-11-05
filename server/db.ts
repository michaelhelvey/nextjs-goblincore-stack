import { PrismaClient } from '@prisma/client'

declare global {
	// eslint-disable-next-line no-var
	var cachedPrisma: PrismaClient | undefined
}

let prisma: PrismaClient
if (process.env.NODE_ENV === 'production') {
	prisma = new PrismaClient()
} else {
	if (!global.cachedPrisma) {
		global.cachedPrisma = new PrismaClient()
	}
	prisma = global.cachedPrisma
	// Note: connecting to sqlite locally should be pretty fast.  For other databases, it
	// might be worth it to eagerly connect so the connection is "hot" when we
	// first hit it, using prisma.$connect()
}

export const db = prisma
