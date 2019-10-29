import perm from './perm'

test('give none array goes as expected', () => {
  const shouldErrWithNum = () => perm(1)
  const shouldErrWithObj = () => perm({})
  const shouldErrWithString = () => perm('1')
  const shouldErrWithBoolean = () => perm(false)
  const shouldErrWithFalsy = () => perm(null)
  expect(shouldErrWithNum).toThrow()
  expect(shouldErrWithObj).toThrow()
  expect(shouldErrWithString).toThrow()
  expect(shouldErrWithBoolean).toThrow()
  expect(shouldErrWithFalsy).toThrow()
})

test('give empty array is ok', () => {
  const useArray = () => perm([])
  expect(useArray)
})

test('array contains no-number throws error', () => {
  const containsString = () => perm([1, 2, 3, 'tets'])
  const containsObj = () => perm([1, 'test', { test: false }])
  const containsBoolean = () => perm([1, 3, false, true])
  const containsArray = () => perm([[1, 2], 3, 4])
  const containsFalsy = () => perm([1, 3, null, undefined])
  expect(containsString).toThrow(/number/)
  expect(containsObj).toThrow(/number/)
  expect(containsBoolean).toThrow(/number/)
  expect(containsArray).toThrow(/number/)
  expect(containsFalsy).toThrow(/number/)
})

test('should give at least two arguments to perm', () => {
  const test1 = () => {
    const a = perm([1])
    console.log(a)
  }
  expect(test1)
})
