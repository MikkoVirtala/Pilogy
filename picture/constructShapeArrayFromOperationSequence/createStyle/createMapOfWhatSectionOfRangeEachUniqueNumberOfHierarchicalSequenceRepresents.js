const {
  getUniqueNumbersInSequence,
} = require('./../../generalHelperFunctions/getUniqueNumbersInSequence')
const {
  getRandomIntegerInRangeIncludeMax,
} = require('./../../generalHelperFunctions/getRandomIntegerInRangeIncludeMax')

module.exports.createMapOfWhatSectionOfRangeEachUniqueNumberOfHierarchicalSequenceRepresents = (
  hierarchicalSequence
) => {
  const mapOfWhatSectionOfRangeEachUniqueNumberOfHierarchicalSequenceRepresents = new Map()
  const uniqueNumbersInSequence = getUniqueNumbersInSequence(
    hierarchicalSequence
  )

  for (let i = 0; i < uniqueNumbersInSequence.length; i++) {
    mapOfWhatSectionOfRangeEachUniqueNumberOfHierarchicalSequenceRepresents.set(
      uniqueNumbersInSequence[i],
      getRandomIntegerInRangeIncludeMax(1, 10)
    )
  }

  return mapOfWhatSectionOfRangeEachUniqueNumberOfHierarchicalSequenceRepresents
}
