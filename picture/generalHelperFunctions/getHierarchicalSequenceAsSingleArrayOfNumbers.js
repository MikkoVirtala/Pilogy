module.exports.getHierarchicalSequenceAsSingleArrayOfNumbers = hierarchicalSequence => {
  let hierarchicalSequenceAsArrayOfNumbers = []
  for (let i = 0; i < hierarchicalSequence.length; i++) {
    hierarchicalSequenceAsArrayOfNumbers = hierarchicalSequenceAsArrayOfNumbers.concat(
      hierarchicalSequence[i]
    )
  }
  return hierarchicalSequenceAsArrayOfNumbers
}
