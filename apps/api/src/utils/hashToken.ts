import crypto from 'crypto'

const hashToken = (token: string) => {
  return crypto.createHash('sha256').update(token).digest('hex')
}

export default hashToken
