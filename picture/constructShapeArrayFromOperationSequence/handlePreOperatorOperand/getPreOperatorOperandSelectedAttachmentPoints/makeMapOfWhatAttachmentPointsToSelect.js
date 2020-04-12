const {
  getUniqueNumbersInSequence,
} = require('../../../generalHelperFunctions/getUniqueNumbersInSequence')

module.exports.makeMapOfWhatAttachmentPointsToSelect = (
  hierarchicalSequence
) => {
  let mapOfWhatAttachmentPointsToSelect = new Map()
  const uniqueNumbersInSequence = getUniqueNumbersInSequence(
    hierarchicalSequence
  )
  for (let i = 0; i < uniqueNumbersInSequence.length; i++) {
    mapOfWhatAttachmentPointsToSelect.set(
      uniqueNumbersInSequence[i],
      Math.random() < 0.5
    )
  }
  return mapOfWhatAttachmentPointsToSelect
}
