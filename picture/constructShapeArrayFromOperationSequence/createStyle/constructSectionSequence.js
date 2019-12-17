module.exports.constructSectionSequence = (
  hierarchicalSequence,
  mapOfWhatSectionOfRangeEachUniqueNumberOfHierarchicalSequenceRepresents
) => {
  let sectionsSequence = []

  for (let i = 0; i < hierarchicalSequence.length; i++) {
    sectionsSequence.push(
      mapOfWhatSectionOfRangeEachUniqueNumberOfHierarchicalSequenceRepresents.get(
        hierarchicalSequence[i]
      )
    )
  }

  return sectionsSequence
}
