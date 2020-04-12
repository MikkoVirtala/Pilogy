const {
  createHierarchicalSequence,
} = require('../createHierarchicalSequence/createHierarchicalSequence')
const {
  getHierarchicalSequenceLength,
} = require('./getHierarchicalSequenceLength')
const {
  getHierarchicalSequenceAsSingleArrayOfNumbers,
} = require('../generalHelperFunctions/getHierarchicalSequenceAsSingleArrayOfNumbers')
const {
  getSequence,
} = require('../createHierarchicalSequence/basicSequences/basicSequencesForCreatingAttachmentPointSelectionsOfShapes')

module.exports.createHierarchicalSequenceRepository = (maxNumberOfLevels) => {
  const numberOfTrialsPerLevel = 1000
  let hierarchicalSequenceRepository = new Map()
  for (let i = 0; i < maxNumberOfLevels; i++) {
    for (let j = 0; j < numberOfTrialsPerLevel; j++) {
      const hierarchicalSequence = createHierarchicalSequence(i, getSequence)
      const hierarchicalSequenceLength = getHierarchicalSequenceLength(
        hierarchicalSequence
      )
      if (!hierarchicalSequenceRepository.has(hierarchicalSequenceLength)) {
        hierarchicalSequenceRepository.set(
          hierarchicalSequenceLength,
          getHierarchicalSequenceAsSingleArrayOfNumbers(hierarchicalSequence)
        )
      }
    }
  }
  return hierarchicalSequenceRepository
}
