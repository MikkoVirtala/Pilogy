const {
  updateNumbersInHierarchicalSequence
} = require('./updateNumbersInHierarchicalSequence')
const {
  getBiggestNumberOfHierarchicalSequence
} = require('./getBiggestNumberOfHierarchicalSequence')

module.exports.makeUniqueSequencesUseDifferentNumbers = hierarchicalSequenceForEveryUniqueSequence => {
  let biggestNumber = -1
  for (let hierarchicalSequence of hierarchicalSequenceForEveryUniqueSequence.values()) {
    hierarchicalSequence = updateNumbersInHierarchicalSequence(
      hierarchicalSequence,
      biggestNumber
    )
    const biggestNumberInHierarchicalSequence = getBiggestNumberOfHierarchicalSequence(
      hierarchicalSequence
    )
    if (biggestNumberInHierarchicalSequence > biggestNumber) {
      biggestNumber = biggestNumberInHierarchicalSequence
    }
  }
  return hierarchicalSequenceForEveryUniqueSequence
}
