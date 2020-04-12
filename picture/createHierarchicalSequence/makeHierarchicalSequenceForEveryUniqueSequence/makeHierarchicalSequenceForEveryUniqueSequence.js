const {
  makeSequenceForEveryUniqueNumber,
} = require('./makeSequenceForEveryUniqueNumber')
const {
  getUniqueNumbersInSequence,
} = require('../../generalHelperFunctions/getUniqueNumbersInSequence')

module.exports.makeHierarchicalSequenceForEveryUniqueSequence = (
  uniqueSequences,
  getSequence
) => {
  let hierarchicalSequenceForEveryUniqueSequence = new Map()
  for (let i = 0; i < uniqueSequences.length; i++) {
    const uniqueSequence = uniqueSequences[i]
    const sequenceForEveryUniqueNumber = makeSequenceForEveryUniqueNumber(
      getUniqueNumbersInSequence(uniqueSequence),
      getSequence
    )

    let newSequence = []
    for (let j = 0; j < uniqueSequence.length; j++) {
      newSequence.push(
        sequenceForEveryUniqueNumber.get(uniqueSequence[j]).slice(0)
      )
    }
    hierarchicalSequenceForEveryUniqueSequence.set(
      uniqueSequence.toString(),
      newSequence
    )
  }
  return hierarchicalSequenceForEveryUniqueSequence
}
