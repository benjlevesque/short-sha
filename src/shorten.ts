export function shorten(sha: string, length: number): string {
  if (!sha) {
    throw new Error('sha must be defined')
  }
  if (length <= 0 || !Number.isInteger(length)) {
    throw new Error('length is invalid')
  }
  if (sha.length < length) {
    throw new Error('input is too short')
  }
  return sha.substring(0, length)
}
