import {shorten} from '../src/shorten'

test('normal case', () => {
  expect(shorten('6e8dcce3fd71cfe9aca3e18c82255dd1e4052aa1', 7)).toBe('6e8dcce')
})

test('already short', () => {
  expect(shorten('6e8dcce', 7)).toBe('6e8dcce')
})

test('too short', () => {
  expect(() => shorten('6e8dcc', 7)).toThrowError('input is too short')
})

test('undefined', () => {
  expect(() => shorten(undefined as any, 7)).toThrowError('sha must be defined')
})

test('null', () => {
  expect(() => shorten(null as any, 7)).toThrowError('sha must be defined')
})

test('invalid length', () => {
  expect(() =>
    shorten('6e8dcce3fd71cfe9aca3e18c82255dd1e4052aa1', 'x' as any)
  ).toThrowError('length is invalid')
})

test('negative length', () => {
  expect(() =>
    shorten('6e8dcce3fd71cfe9aca3e18c82255dd1e4052aa1', -1)
  ).toThrowError('length is invalid')
})

test('zero length', () => {
  expect(() =>
    shorten('6e8dcce3fd71cfe9aca3e18c82255dd1e4052aa1', 0)
  ).toThrowError('length is invalid')
})
