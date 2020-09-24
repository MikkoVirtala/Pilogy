const {
	getRandomIntegerInRangeExcludeMax,
} = require('../../../generalHelperFunctions/getRandomIntegerInRangeExcludeMax')

class ShapeBuilder {
	constructor(style) {
		this.stroke = style.getColor()
		this.strokeOpacity = style.getOpacity()
		this.strokeWidth = getRandomIntegerInRangeExcludeMax(1, 5)
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

	setParentId(parentId) {
		this.parentId = parentId
	}

	getAttachmentPointIndex() {
		return this.attachmentPointIndex
	}

	setAttachmentPointIndex(attachmentPointIndex) {
		this.attachmentPointIndex = attachmentPointIndex
	}

	getNumberOfAttachmentPoints() {
		return this.numberOfAttachmentPoints
	}
}

module.exports.ShapeBuilder = ShapeBuilder
