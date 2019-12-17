module.exports.calculateNumberOfSectionUnitsInSectionSequence = sectionSequence => {
  let numberOfSectionUnitsInSectionsSequence = 0

  for (let j = 0; j < sectionSequence.length; j++) {
    numberOfSectionUnitsInSectionsSequence += sectionSequence[j]
  }

  return numberOfSectionUnitsInSectionsSequence
}
