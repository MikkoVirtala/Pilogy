const { Triangle } = require('../../../shapes/Triangle')
const { ShapeBuilder } = require('./ShapeBuilder')
const {
	getRandomIntegerInRangeExcludeMax,
} = require('../../../generalHelperFunctions/getRandomIntegerInRangeExcludeMax')

class TriangleBuilder extends ShapeBuilder {
	constructor(style) {
		super(style)
		this.width = style.getLength('short')
		this.height = style.getLength('short')
		this.fill = style.getColor()
		this.fillOpacity = style.getOpacity()
		this.attachmentPointIndex = getRandomIntegerInRangeExcludeMax(0, 7)
		this.numberOfAttachmentPoints = 7
	}

	build() {
		return new Triangle(
			this.width,
			this.height,
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

module.exports.TriangleBuilder = TriangleBuilder
