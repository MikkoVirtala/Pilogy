const {
	getRandomIntegerInRangeExcludeMax,
} = require('../../generalHelperFunctions/getRandomIntegerInRangeExcludeMax')
const { Circle } = require('../../shapes/Circle')
const { ShapeBuilder } = require('./ShapeBuilder')

class CircleBuilder extends ShapeBuilder {
	constructor(style) {
		super(style)
		this.r = style.getLength('short')
		this.fill = style.getColor()
		this.fillOpacity = style.getOpacity()
	}

	build() {
		return new Circle(
			this.r,
			this.fill,
			this.fillOpacity,
			this.stroke,
			this.strokeOpacity,
			this.strokeWidth,
			this.rotationInDegrees,
			this.pointToAttach,
			this.attachmentPointIndex,
			this.visible,
			this.parentId
		)
	}
}

module.exports.CircleBuilder = CircleBuilder
