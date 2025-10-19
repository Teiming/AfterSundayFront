import { createCipheriv, randomBytes } from 'crypto'

export const genCipher = (key: string, iv = randomBytes(12)) => {
  return (p: string) => {
    const cipher = createCipheriv('aes-256-gcm', Buffer.from(key, 'hex'), iv)
    return {
      iv,
      cipher: Buffer.concat([cipher.update(p, 'utf8'), cipher.final()]),
      tag: cipher.getAuthTag(),
    }
  }
}

const kakaoTokenKey = process.env.KAKAO_TOKEN_KEY
if (!kakaoTokenKey) {
  throw new Error('no kakaoTokenKey')
}
export const genCipherKakao = genCipher(kakaoTokenKey)
