const {
	getRandomIntegerInRangeExcludeMax,
} = require('../../getRandomIntegerInRangeExcludeMax')
const { Rectangle } = require('../../shapes/Rectangle')

class RectangleBuilder {
	constructor(style) {
		this.width = style.getLength('short')
		this.height = style.getLength('short')
		this.fill = style.getColor()
		this.fillOpacity = style.getOpacity()
		this.stroke = style.getColor()
		this.strokeOpacity = style.getOpacity()
		this.strokeWidth = getRandomIntegerInRangeExcludeMax(1, 5)
		this.attachmentPointIndex = getRandomIntegerInRangeExcludeMax(0, 8)
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
			this.visible
		)
	}
}

module.exports.RectangleBuilder = RectangleBuilder
