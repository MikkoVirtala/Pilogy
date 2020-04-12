const {
  getRandomElementInArray,
} = require('../../generalHelperFunctions/getRandomElementInArray')

module.exports.getPreOperatorOperandSelectedShapes = (
  shapeArray,
  indexOfLatestOperationResultStart,
  preOperatorOperand
) => {
  switch (preOperatorOperand) {
    case 'all':
      return shapeArray
    case 'some':
      const selectedShapes = []
      const numberOfSelectedShapes = Math.floor(
        Math.random() * shapeArray.length
      )
      for (let i = 0; i < numberOfSelectedShapes; i++) {
        selectedShapes.push(getRandomElementInArray(shapeArray))
      }
      return selectedShapes
    case 'latestOperationResult':
      return shapeArray.slice(indexOfLatestOperationResultStart)
    case 'lines':
      return shapeArray.filter((shape) => shape.type === 'line')
    case 'rectangles':
      return shapeArray.filter((shape) => shape.type === 'rectangle')
    case 'circles':
      return shapeArray.filter((shape) => shape.type === 'circle')
    default:
      return []
  }
}
