module.exports.getUniqueSequences = hierarchicalSequence => {
  let uniqueSequences = []
  for (let i = 0; i < hierarchicalSequence.length; i++) {
    if (isUnique(hierarchicalSequence[i], uniqueSequences)) {
      uniqueSequences.push(hierarchicalSequence[i])
    }
  }
  return uniqueSequences
}

function isUnique(array, arrays) {
  for (let i = 0; i < arrays.length; i++) {
    if (areEqualArrays(array, arrays[i])) {
      return false
    }
  }
  return true
}

function areEqualArrays(array1, array2) {
  if (array1.length === 0 || array2.length === 0) {
    return false
  }
  if (array1.length !== array2.length) {
    return false
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false
    }
  }
  return true
}
