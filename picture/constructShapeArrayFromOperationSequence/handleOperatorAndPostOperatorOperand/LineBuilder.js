const {
	getRandomIntegerInRangeExcludeMax,
} = require('../../getRandomIntegerInRangeExcludeMax')
const { Line } = require('../../shapes/Line')

class LineBuilder {
	constructor(style) {
		this.length = style.getLength('long')
		this.stroke = style.getColor()
		this.strokeOpacity = style.getOpacity()
		this.strokeWidth = getRandomIntegerInRangeExcludeMax(1, 5)
		this.attachmentPointIndex = getRandomIntegerInRangeExcludeMax(0, 2)
		this.rotationStyle = style.getRotationStyle()
		this.constantForRotationFunction = style.getConstantForRotationFunction()
	}

	setRotationInDegrees(normal, counter) {
		this.rotationInDegrees = this.rotationStyle({
			normal,
			counter,
			constant: this.constantForRotationFunction,
		})
	}

	setPointToAttach(pointToAttach) {
		this.pointToAttach = pointToAttach
	}

	setVisibility(visible) {
		this.visible = visible
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
			this.visible
		)
	}
}

module.exports.LineBuilder = LineBuilder
