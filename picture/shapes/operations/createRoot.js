const { Circle } = require('../Circle')
const { Line } = require('../Line')
const { Rectangle } = require('../Rectangle')
const { Triangle } = require('../Triangle')

module.exports.createRoot = (style) => {
	switch (style.getUsableTypeOfShape()) {
		case 'rectangle':
			return new Rectangle(
				style.getLength('long'),
				style.getLength('long'),
				style.getColor(),
				style.getOpacity(),
				style.getColor(),
				style.getOpacity(),
				getRandomIntegerInRangeExcludeMax(1, 5),
				0, // getRandomIntegerInRangeExcludeMax(0, 360),
				new AttachmentPoint(100, 100),
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
				0, // getRandomIntegerInRangeExcludeMax(0, 360),
				new AttachmentPoint(100, 100),
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
				0, // getRandomIntegerInRangeExcludeMax(0, 360),
				new AttachmentPoint(100, 100),
				0,
				operationResultIsVisible
			)
		default:
			return new Line(
				style.getLength('long'),
				style.getColor(),
				style.getOpacity(),
				getRandomIntegerInRangeExcludeMax(1, 5),
				0, // getRandomIntegerInRangeExcludeMax(0, 360),
				new AttachmentPoint(100, 100),
				0,
				operationResultIsVisible
			)
	}
}
