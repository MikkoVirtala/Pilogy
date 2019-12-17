const { Line } = require('../shapes/Line')
const { Rectangle } = require('../shapes/Rectangle')
const { Circle } = require('../shapes/Circle')
const { Triangle } = require('../shapes/Triangle')
const { getRandomElementInArray } = require('../getRandomElementInArray')
const {
  getRandomIntegerInRangeExcludeMax
} = require('../getRandomIntegerInRangeExcludeMax')

const initialShapes = ['line', 'rectangle', 'circle', 'triangle']

module.exports.getInitializingShape = (style, operationResultIsVisible) => {
  switch (getRandomElementInArray(initialShapes)) {
    case 'rectangle':
      return new Rectangle(
        style.getLength('long'),
        style.getLength('long'),
        style.getColor(),
        style.getOpacity(),
        style.getColor(),
        style.getOpacity(),
        getRandomIntegerInRangeExcludeMax(1, 5),
        getRandomIntegerInRangeExcludeMax(0, 360),
        [100, 100],
        0,
        operationResultIsVisible
      )
    case 'circle':
      return new Circle(
        style.getLength('long'),
        style.getColor(),
        style.getOpacity(),
        style.getColor(),
        style.getOpacity(),
        getRandomIntegerInRangeExcludeMax(1, 5),
        getRandomIntegerInRangeExcludeMax(0, 360),
        [100, 100],
        0,
        operationResultIsVisible
      )
    case 'triangle':
      return new Triangle(
        style.getLength('long'),
        style.getLength('long'),
        style.getColor(),
        style.getOpacity(),
        style.getColor(),
        style.getOpacity(),
        getRandomIntegerInRangeExcludeMax(1, 5),
        getRandomIntegerInRangeExcludeMax(0, 360),
        [100, 100],
        0,
        operationResultIsVisible
      )
    default:
      return new Line(
        style.getLength('long'),
        style.getColor(),
        style.getOpacity(),
        getRandomIntegerInRangeExcludeMax(1, 5),
        getRandomIntegerInRangeExcludeMax(0, 360),
        [100, 100],
        0,
        operationResultIsVisible
      )
  }
}
