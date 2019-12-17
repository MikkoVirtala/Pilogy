module.exports.getBiggestNumberOfHierarchicalSequence = hierarchicalSequence => {
  let biggestNumber = 0
  for (let i = 0; i < hierarchicalSequence.length; i++) {
    const sequence = hierarchicalSequence[i]
    for (let j = 0; j < sequence.length; j++) {
      const number = sequence[j]
      if (number > biggestNumber) {
        biggestNumber = number
      }
    }
  }
  return biggestNumber
}
