module.exports.makeSequenceForEveryUniqueNumber = (
  uniqueNumbers,
  getSequence
) => {
  let sequenceForEveryUniqueNumber = new Map()
  for (let i = 0; i < uniqueNumbers.length; i++) {
    sequenceForEveryUniqueNumber.set(uniqueNumbers[i], getSequence())
  }
  return sequenceForEveryUniqueNumber
}
