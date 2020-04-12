const {
  createMapOfWhatSectionOfRangeEachUniqueNumberOfHierarchicalSequenceRepresents,
} = require('./createMapOfWhatSectionOfRangeEachUniqueNumberOfHierarchicalSequenceRepresents')
const { constructSectionSequence } = require('./constructSectionSequence')
const {
  calculateNumberOfSectionUnitsInSectionSequence,
} = require('./calculateNumberOfSectionUnitsInSectionSequence')
const {
  getHierarchicalSequenceAsSingleArrayOfNumbers,
} = require('../../generalHelperFunctions/getHierarchicalSequenceAsSingleArrayOfNumbers')

module.exports.createPatternOfNumbersInRange = (
  lowerLimit,
  upperLimit,
  hierarchicalSequence
) => {
  const hierarchicalSequenceAsSingleArrayOfNumbers = getHierarchicalSequenceAsSingleArrayOfNumbers(
    hierarchicalSequence
  )
  const mapOfWhatSectionOfRangeEachUniqueNumberOfHierarchicalSequenceRepresents = createMapOfWhatSectionOfRangeEachUniqueNumberOfHierarchicalSequenceRepresents(
    hierarchicalSequenceAsSingleArrayOfNumbers
  )
  const sectionsSequence = constructSectionSequence(
    hierarchicalSequenceAsSingleArrayOfNumbers,
    mapOfWhatSectionOfRangeEachUniqueNumberOfHierarchicalSequenceRepresents
  )
  const numberOfSectionUnitsInSectionsSequence = calculateNumberOfSectionUnitsInSectionSequence(
    sectionsSequence
  )
  const range = upperLimit - lowerLimit
  const sectionUnitInRange = range / numberOfSectionUnitsInSectionsSequence
  const patternOfNumbersInRange = []
  let number = lowerLimit
  const offset = Math.random() * sectionsSequence[0] * sectionUnitInRange

  for (let k = 0; k < sectionsSequence.length; k++) {
    number = number + sectionsSequence[k] * sectionUnitInRange
    patternOfNumbersInRange.push(number - offset)
  }

  return patternOfNumbersInRange
}
