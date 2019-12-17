const {
  handlePreOperatorOperand
} = require('./handlePreOperatorOperand/handlePreOperatorOperand')
const { Line } = require('../shapes/Line')
const { Rectangle } = require('../shapes/Rectangle')
const { Circle } = require('../shapes/Circle')
const { Triangle } = require('../shapes/Triangle')
const { getInitializingShape } = require('./getInitializingShape')
const {
  getRandomIntegerInRangeExcludeMax
} = require('../getRandomIntegerInRangeExcludeMax')

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

  const rotationIncrementCondition = getRandomIntegerInRangeExcludeMax(0, 3)
  const rotationIncrement =
    rotationIncrementCondition === 0
      ? 0
      : rotationIncrementCondition === 1
      ? Math.round(style.getLength('short'))
      : -Math.round(style.getLength('short'))
  const useLoopCounterWithRotationIncrement =
    getRandomIntegerInRangeExcludeMax(0, 2) === 0 ? true : false

  const lineLength = style.getLength('long')
  const lineStroke = style.getColor()
  const lineStrokeOpacity = style.getOpacity()
  const lineStrokeWidth = getRandomIntegerInRangeExcludeMax(1, 5)
  const lineRotationInDegrees = getRandomIntegerInRangeExcludeMax(0, 360)
  const lineAttachmentPointIndex = getRandomIntegerInRangeExcludeMax(0, 2)

  const rectangleWidth = style.getLength('short')
  const rectangleHeight = style.getLength('short')
  const rectangleFill = style.getColor()
  const rectangleFillOpacity = style.getOpacity()
  const rectangleStroke = style.getColor()
  const rectangleStrokeOpacity = style.getOpacity()
  const rectangleStrokeWidth = getRandomIntegerInRangeExcludeMax(1, 5)
  const rectangleRotationInDegrees = getRandomIntegerInRangeExcludeMax(0, 360)
  const rectangleAttachmentPointIndex = getRandomIntegerInRangeExcludeMax(0, 8)

  const circleR = style.getLength('short')
  const circleFill = style.getColor()
  const circleFillOpacity = style.getOpacity()
  const circleStroke = style.getColor()
  const circleStrokeOpacity = style.getOpacity()
  const circleStrokeWidth = getRandomIntegerInRangeExcludeMax(1, 5)
  const circleRotationInDegrees = getRandomIntegerInRangeExcludeMax(0, 360)
  const circleAttachmentPointIndex = getRandomIntegerInRangeExcludeMax(0, 4)

  const triangleWidth = style.getLength('short')
  const triangleHeight = style.getLength('short')
  const triangleFill = style.getColor()
  const triangleFillOpacity = style.getOpacity()
  const triangleStroke = style.getColor()
  const triangleStrokeOpacity = style.getOpacity()
  const triangleStrokeWidth = getRandomIntegerInRangeExcludeMax(1, 5)
  const triangleRotationInDegrees = getRandomIntegerInRangeExcludeMax(0, 360)
  const triangleAttachmentPointIndex = getRandomIntegerInRangeExcludeMax(0, 7)

  for (let i = 0; i < selectedAttachmentPoints.length; i++) {
    if (operation.operator === 'add') {
      if (operation.postOperatorOperand === 'line') {
        newShapes.push(
          new Line(
            lineLength,
            lineStroke,
            lineStrokeOpacity,
            lineStrokeWidth,
            lineRotationInDegrees +
              rotationIncrement * (useLoopCounterWithRotationIncrement ? i : 1),
            selectedAttachmentPoints[i],
            lineAttachmentPointIndex,
            operation.resultIsVisible
          )
        )
      } else if (operation.postOperatorOperand === 'rectangle') {
        newShapes.push(
          new Rectangle(
            rectangleWidth,
            rectangleHeight,
            rectangleFill,
            rectangleFillOpacity,
            rectangleStroke,
            rectangleStrokeOpacity,
            rectangleStrokeWidth,
            rectangleRotationInDegrees +
              rotationIncrement * (useLoopCounterWithRotationIncrement ? i : 1),
            selectedAttachmentPoints[i],
            rectangleAttachmentPointIndex,
            operation.resultIsVisible
          )
        )
      } else if (operation.postOperatorOperand === 'circle') {
        newShapes.push(
          new Circle(
            circleR,
            circleFill,
            circleFillOpacity,
            circleStroke,
            circleStrokeOpacity,
            circleStrokeWidth,
            circleRotationInDegrees +
              rotationIncrement * (useLoopCounterWithRotationIncrement ? i : 1),
            selectedAttachmentPoints[i],
            circleAttachmentPointIndex,
            operation.resultIsVisible
          )
        )
      } else if (operation.postOperatorOperand === 'triangle') {
        newShapes.push(
          new Triangle(
            triangleWidth,
            triangleHeight,
            triangleFill,
            triangleFillOpacity,
            triangleStroke,
            triangleStrokeOpacity,
            triangleStrokeWidth,
            triangleRotationInDegrees *
              (useLoopCounterWithRotationIncrement ? i : 1),
            selectedAttachmentPoints[i],
            triangleAttachmentPointIndex,
            operation.resultIsVisible
          )
        )
      }
    }
  }

  return newShapes
}
