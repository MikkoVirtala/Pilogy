module.exports.getUniqueNumbersInSequence = sequence => {
  let uniqueNumbers = []
  for (let i = 0; i < sequence.length; i++) {
    if (!uniqueNumbers.includes(sequence[i])) {
      uniqueNumbers.push(sequence[i])
    }
  }
  return uniqueNumbers
}
