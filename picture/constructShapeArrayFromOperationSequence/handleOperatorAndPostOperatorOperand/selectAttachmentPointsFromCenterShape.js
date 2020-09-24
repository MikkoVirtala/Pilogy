const {
	arrayHasUnevenNumberOfItems,
} = require('../../generalHelperFunctions/arrayHasUnevenNumberOfItems')

module.exports.selectAttachmentPointsFromCenterShape = (
	attachmentPointsOfCenterShape
) => {
	const selectedAttachmentPoints = []
	const selectedCounterAttachmentPoints = []
	const loopLimit = Math.floor(attachmentPointsOfCenterShape.length / 2)

	for (let k = 0; k < loopLimit; k++) {
		if (Math.random() > 0.5) {
			selectedAttachmentPoints.push(attachmentPointsOfCenterShape[k])
			selectedCounterAttachmentPoints.unshift(
				attachmentPointsOfCenterShape[
					attachmentPointsOfCenterShape.length - 1 - k
				]
			)
		}
	}

	if (arrayHasUnevenNumberOfItems(attachmentPointsOfCenterShape)) {
		if (Math.random() > 0.5) {
			selectedAttachmentPoints.push(
				getCenterAttachmentPoint(attachmentPointsOfCenterShape)
			)
		}
	}

	return {
		selectedAttachmentPoints,
		selectedCounterAttachmentPoints,
	}
}

const getCenterAttachmentPoint = (attachmentPoints) => {
	return attachmentPoints[Math.floor(attachmentPoints.length / 2)]
}
