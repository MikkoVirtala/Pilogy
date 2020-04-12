const { createRotationStyle } = require('./createRotationStyle')
const {
  getRandomIntegerInRangeIncludeMax,
} = require('../../../generalHelperFunctions/getRandomIntegerInRangeIncludeMax')

module.exports.createRotationStyleSelection = () => {
  const numberOfRotationStylesInSelection = getRandomIntegerInRangeIncludeMax(
    1,
    8
  )
  const rotationStyleSelection = []

  for (let i = 0; i < numberOfRotationStylesInSelection; i++) {
    rotationStyleSelection.push(createRotationStyle())
  }

  return rotationStyleSelection
}
