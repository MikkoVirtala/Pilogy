const { Rectangle } = require('../../../shapes/Rectangle')
const { ShapeBuilder } = require('./ShapeBuilder')
const {
	getRandomIntegerInRangeExcludeMax,
} = require('../../../generalHelperFunctions/getRandomIntegerInRangeExcludeMax')

class RectangleBuilder extends ShapeBuilder {
	constructor(style) {
		super(style)
		this.width = style.getLength('short')
		this.height = style.getLength('short')
		this.fill = style.getColor()
		this.fillOpacity = style.getOpacity()
		this.attachmentPointIndex = getRandomIntegerInRangeExcludeMax(0, 9)
		this.numberOfAttachmentPoints = 9
	}

	build() {
		return new Rectangle(
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

module.exports.RectangleBuilder = RectangleBuilder
