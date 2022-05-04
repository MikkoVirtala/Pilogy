const { Line } = require('../shapes/Line')
const { Rectangle } = require('../shapes/Rectangle')
const { Circle } = require('../shapes/Circle')
const { Triangle } = require('../shapes/Triangle')
const {
	getRandomElementInArray,
} = require('../generalHelperFunctions/getRandomElementInArray')
const {
	getRandomIntegerInRangeExcludeMax,
} = require('../generalHelperFunctions/getRandomIntegerInRangeExcludeMax')
const { AttachmentPoint } = require('../shapes/AttachmentPoint')
const {
	getWeightedProbability,
} = require('../generalHelperFunctions/getWeightedProbability')

class RootShapeBuilder {
	constructor(style) {
		this.style = style
	}

	build() {
		switch (
			getRandomElementInArray(this.style.getSelectionOfUsableTypesOfShapes())
		) {
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
					style.getVisibilityOfShape()
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
					style.getVisibilityOfShape()
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
					style.getVisibilityOfShape()
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
					style.getVisibilityOfShape()
				)
		}
	}
}

module.exports.RootShapeBuilder = RootShapeBuilder
