const {
  handlePreOperatorOperand,
} = require('../handlePreOperatorOperand/handlePreOperatorOperand')
const { getInitializingShape } = require('../getInitializingShape')
const { LineBuilder } = require('./LineBuilder')
const { RectangleBuilder } = require('./RectangleBuilder')
const { CircleBuilder } = require('./CircleBuilder')
const { TriangleBuilder } = require('./TriangleBuilder')

module.exports.operate = (
  shapeArray,
  indexOfLatestOperationResultStart,
  operation,
  hierarchicalSequenceRepository,
  style
) => {
  let newShapes = []

  if (operation.operator === 'initialize') {
    newShapes.push(getInitializingShape(style, operation.resultIsVisible))
    return newShapes
  }

  const selectedAttachmentPoints = handlePreOperatorOperand(
    shapeArray,
    indexOfLatestOperationResultStart,
    operation.preOperatorOperand,
    hierarchicalSequenceRepository
  )

  let lineBuilder = new LineBuilder(style)
  let rectangleBuilder = new RectangleBuilder(style)
  let circleBuilder = new CircleBuilder(style)
  let triangleBuilder = new TriangleBuilder(style)

  for (let i = 0; i < selectedAttachmentPoints.length; i++) {
    const normal = selectedAttachmentPoints[i].getNormalAngle()
    if (operation.operator === 'add') {
      if (operation.postOperatorOperand === 'line') {
        lineBuilder.setRotationInDegrees(normal, i)
        lineBuilder.setPointToAttach(selectedAttachmentPoints[i])
        lineBuilder.setVisibility(operation.resultIsVisible)
        newShapes.push(lineBuilder.build())
      } else if (operation.postOperatorOperand === 'rectangle') {
        rectangleBuilder.setRotationInDegrees(normal, i)
        rectangleBuilder.setPointToAttach(selectedAttachmentPoints[i])
        rectangleBuilder.setVisibility(operation.resultIsVisible)
        newShapes.push(rectangleBuilder.build())
      } else if (operation.postOperatorOperand === 'circle') {
        circleBuilder.setRotationInDegrees(normal, i)
        circleBuilder.setPointToAttach(selectedAttachmentPoints[i])
        circleBuilder.setVisibility(operation.resultIsVisible)
        newShapes.push(circleBuilder.build())
      } else if (operation.postOperatorOperand === 'triangle') {
        triangleBuilder.setRotationInDegrees(normal, i)
        triangleBuilder.setPointToAttach(selectedAttachmentPoints[i])
        triangleBuilder.setVisibility(operation.resultIsVisible)
        newShapes.push(triangleBuilder.build())
      }
    }
  }

  return newShapes
}
