module.exports.constructNewHierarchicalSequence = (
  hierarchicalSequenceAsArrayOfStrings,
  hierarchicalSequenceForEveryUniqueSequence
) => {
  let newHierarchicalSequence = []
  for (let i = 0; i < hierarchicalSequenceAsArrayOfStrings.length; i++) {
    const newSequence = hierarchicalSequenceForEveryUniqueSequence.get(
      hierarchicalSequenceAsArrayOfStrings[i]
    )
    for (let j = 0; j < newSequence.length; j++) {
      newHierarchicalSequence.push(newSequence[j])
    }
  }
  return newHierarchicalSequence
}
