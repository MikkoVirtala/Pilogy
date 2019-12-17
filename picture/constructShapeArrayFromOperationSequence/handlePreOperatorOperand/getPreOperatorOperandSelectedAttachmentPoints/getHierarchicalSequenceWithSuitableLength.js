const { getRandomElementInArray } = require('../../../getRandomElementInArray')

module.exports.getHierarchicalSequenceWithSuitableLength = (
  hierarchicalSequenceRepository,
  wantedLength
) => {
  if (hierarchicalSequenceRepository.has(wantedLength)) {
    return hierarchicalSequenceRepository.get(wantedLength)
  }
  let suitableHierarchicalSequences = []
  for (const length of hierarchicalSequenceRepository.keys()) {
    if (wantedLength % length === 0) {
      suitableHierarchicalSequences.push(
        hierarchicalSequenceRepository.get(length)
      )
    }
  }
  return getRandomElementInArray(suitableHierarchicalSequences)
}
