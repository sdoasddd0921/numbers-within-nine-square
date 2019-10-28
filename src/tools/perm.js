const perm = arr => {
  if (!Array.isArray(arr)) {
    throw new Error('required an error')
  }
  if (arr.some(item => typeof item !== 'number')) {
    throw new Error('array items should be number')
  }
}

export default perm
