export const base64Encode = (str: string) => {
  const buf = Buffer.from(str)
  return buf.toString('base64')
}

export const base64Decode = (base64: string) =>
  Buffer.from(base64, 'base64')
