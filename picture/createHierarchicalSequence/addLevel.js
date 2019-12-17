const { getUniqueSequences } = require('./getUniqueSequences')
const {
  makeHierarchicalSequenceForEveryUniqueSequence
} = require('./makeHierarchicalSequenceForEveryUniqueSequence/makeHierarchicalSequenceForEveryUniqueSequence')
const {
  makeUniqueSequencesUseDifferentNumbers
} = require('./makeUniqueSequencesUseDifferentNumbers/makeUniqueSequencesUseDifferentNumbers')
const {
  convertArraysToStringInArray
} = require('./convertArraysToStringInArray')
const {
  constructNewHierarchicalSequence
} = require('./constructNewHierarchicalSequence')

module.exports.addLevel = (hierarchicalSequence, getSequence) => {
  const uniqueSequences = getUniqueSequences(hierarchicalSequence)
  let hierarchicalSequenceForEveryUniqueSequence = makeHierarchicalSequenceForEveryUniqueSequence(
    uniqueSequences,
    getSequence
  )
  hierarchicalSequenceForEveryUniqueSequence = makeUniqueSequencesUseDifferentNumbers(
    hierarchicalSequenceForEveryUniqueSequence
  )
  const hierarchicalSequenceAsArrayOfStrings = convertArraysToStringInArray(
    hierarchicalSequence
  )
  return constructNewHierarchicalSequence(
    hierarchicalSequenceAsArrayOfStrings,
    hierarchicalSequenceForEveryUniqueSequence
  )
}
