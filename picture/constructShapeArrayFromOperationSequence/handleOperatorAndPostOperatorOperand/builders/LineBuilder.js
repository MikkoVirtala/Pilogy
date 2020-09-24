const {
	getRandomIntegerInRangeExcludeMax,
} = require('../../../generalHelperFunctions/getRandomIntegerInRangeExcludeMax')
const { Line } = require('../../../shapes/Line')
const { ShapeBuilder } = require('./ShapeBuilder')

class LineBuilder extends ShapeBuilder {
	constructor(style) {
		super(style)
		this.length = style.getLength('long')
		this.attachmentPointIndex = getRandomIntegerInRangeExcludeMax(0, 3)
		this.numberOfAttachmentPoints = 3
	}

	build() {
		return new Line(
			this.length,
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

module.exports.LineBuilder = LineBuilder
