const {
	selectAttachmentPointsFromCenterShape,
} = require('./selectAttachmentPointsFromCenterShape')
const {
	arrayHasUnevenNumberOfItems,
} = require('../../generalHelperFunctions/arrayHasUnevenNumberOfItems')

module.exports.selectAttachmentPoints = (shapes) => {
	const selectedAttachmentPoints = []
	const selectedCounterAttachmentPoints = []

	if (shapes.length > 1) {
		console.log('shapes.length > 1')
		const loopLimit = Math.floor(shapes.length / 2)
		for (let i = 0; i < loopLimit; i++) {
			const shape = shapes[i]
			const counterShape = shapes[shapes.length - 1 - i]
			const attachmentPointsOfShape = shape.getAttachmentPoints()
			const attachmentPointsOfCounterShape = counterShape.getAttachmentPoints()

			for (let j = 0; j < attachmentPointsOfShape.length; j++) {
				if (Math.random() > 0.5) {
					const attachmentPoint = attachmentPointsOfShape[j]
					const counterAttachmentPointInSameShape =
						attachmentPointsOfShape[attachmentPointsOfShape.length - 1 - j]
					const counterAttachmentPointInCounterShape =
						attachmentPointsOfCounterShape[
							attachmentPointsOfCounterShape.length - 1 - j
						]
					const counterAttachmentPointInDifferentShapeOfCounterAttachmentPointInSameShape =
						attachmentPointsOfCounterShape[j]

					if (shape.getType() === 'line') {
						selectedCounterAttachmentPoints.unshift(
							counterAttachmentPointInDifferentShapeOfCounterAttachmentPointInSameShape
						)
					} else if (shape.getType() === 'triangle') {
						// shape.getType() === 'triangle' && (j === 2 || j === 4)
						console.log('1. meni')
						selectedAttachmentPoints.push(attachmentPoint)
						selectedCounterAttachmentPoints.unshift(
							counterAttachmentPointInCounterShape
						)
						selectedAttachmentPoints.push(counterAttachmentPointInSameShape)
						selectedCounterAttachmentPoints.unshift(
							counterAttachmentPointInDifferentShapeOfCounterAttachmentPointInSameShape
						)
					} else {
						selectedCounterAttachmentPoints.unshift(
							counterAttachmentPointInCounterShape
						)
					}
				}
			}
		}
	}

	if (arrayHasUnevenNumberOfItems(shapes)) {
		const selectedAttachmentPointsFromCenterShape = selectAttachmentPointsFromCenterShape(
			shapes[Math.floor(shapes.length / 2)].getAttachmentPoints()
		)
		selectedAttachmentPoints.push(
			...selectedAttachmentPointsFromCenterShape.selectedAttachmentPoints
		)
		selectedCounterAttachmentPoints.unshift(
			...selectedAttachmentPointsFromCenterShape.selectedCounterAttachmentPoints
		)
	}

	return {
		selectedAttachmentPoints,
		selectedCounterAttachmentPoints,
	}
}
