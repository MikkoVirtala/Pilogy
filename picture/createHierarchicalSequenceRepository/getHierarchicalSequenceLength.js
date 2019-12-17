module.exports.getHierarchicalSequenceLength = hierarchicalSequence => {
  let length = 0
  for (let i = 0; i < hierarchicalSequence.length; i++) {
    length += hierarchicalSequence[i].length
  }
  return length
}
