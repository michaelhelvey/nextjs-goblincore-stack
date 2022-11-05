import bcrypt from 'bcryptjs'

export async function encryptPassword(plainText: string) {
	const hash = await bcrypt.hash(plainText, 10)
	return hash
}

export async function comparePasswords(plain: string, hashed: string) {
	return bcrypt.compare(plain, hashed)
}
