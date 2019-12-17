const { addLevel } = require('./addLevel')

module.exports.createHierarchicalSequence = (numberOfLevels, getSequence) => {
  let hierarchicalSequence = []

  hierarchicalSequence.push(getSequence())

  for (let i = 0; i < numberOfLevels; i++) {
    hierarchicalSequence = addLevel(hierarchicalSequence, getSequence)
  }

  return hierarchicalSequence
}
