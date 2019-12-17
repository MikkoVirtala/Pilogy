module.exports.updateNumbersInHierarchicalSequence = (
  hierarchicalSequence,
  biggestNumber
) => {
  for (let i = 0; i < hierarchicalSequence.length; i++) {
    let sequence = hierarchicalSequence[i]
    for (let j = 0; j < sequence.length; j++) {
      const number = sequence[j]
      sequence[j] = number + biggestNumber + 1
    }
  }
  return hierarchicalSequence
}
