const { operate } = require('./operate')
const { Style } = require('./createStyle/Style')

module.exports.constructShapeArrayFromOperationSequence = (
  operationSequence,
  hierarchicalSequenceRepository,
  maxNumberOfShapesInPicture
) => {
  const style = new Style()
  let shapeArray = []
  let indexOfLatestOperationResultStart = 0
  for (let i = 0; i < operationSequence.length; i++) {
    const newShapes = operate(
      shapeArray,
      indexOfLatestOperationResultStart,
      operationSequence[i],
      hierarchicalSequenceRepository,
      style
    )
    indexOfLatestOperationResultStart = shapeArray.length
    if (shapeArray.length + newShapes.length > maxNumberOfShapesInPicture) {
      console.log('Break')
      break
    }
    shapeArray.push(...newShapes)
  }
  return shapeArray.filter(function(shape) {
    return shape.isVisible()
  })
}
