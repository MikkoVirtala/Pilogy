module.exports.getAverage = (numbers) => {
  return (
    numbers.reduce((total, number) => {
      return total + number
    }, 0) / numbers.length
  )
}
