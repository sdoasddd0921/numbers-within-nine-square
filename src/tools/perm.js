const perm = arr => {
  if (!Array.isArray(arr)) {
    throw new Error('required an error')
  }
  if (arr.some(item => typeof item !== 'number')) {
    throw new Error('array items should be number')
  }
  if (arr.length) {
    arr.reduce(
      (acc, x) => acc.concat(
        perm(arr.filter(e => e !== x)).map(a => [x].concat(a))
      ),
      []
    )
  } else {
    return [[]]
  }
}

export default perm
