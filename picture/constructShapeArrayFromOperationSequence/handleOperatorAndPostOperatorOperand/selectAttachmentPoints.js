module.exports.selectAttachmentPoints = (shapes) => {
	console.log('selectAttachmentPoints: shapes: ', shapes)
	console.log('shapes.length: ', shapes.length)

	if (shapes.length === 1) {
		return getAttachmentPointsOfCenterShape(shapes)
	}

	const selectedAttachmentPoints = []
	const selectedCounterAttachmentPoints = []
	const loopLimit = Math.floor(shapes.length / 2)

	for (let i = 0; i < loopLimit; i++) {
		console.log('shapes: i: ', i)
		const shape = shapes[i]
		const attachmentPointsOfShape = shape.getAttachmentPoints()

		for (let j = 0; j < attachmentPointsOfShape.length; j++) {
			if (Math.random() > 0.5) {
				console.log('counterShape: ', shapes.length - 1 - i)
				console.log('attachmentPoint: ', j)
				const attachmentPoint = attachmentPointsOfShape[j]
				let counterAttachmentPoint = {}
				const counterShapeAttachmentPoints = shapes[
					shapes.length - 1 - i
				].getAttachmentPoints()
				if (shape.getType() === 'line') {
					console.log('counterAttachmentPoint: ', j)
					counterAttachmentPoint = counterShapeAttachmentPoints[j]
				} else {
					console.log(
						'counterAttachmentPoint: ',
						counterShapeAttachmentPoints.length - 1 - j
					)
					counterAttachmentPoint =
						counterShapeAttachmentPoints[
							counterShapeAttachmentPoints.length - 1 - j
						]
				}
				selectedAttachmentPoints.push(attachmentPoint)
				selectedCounterAttachmentPoints.unshift(counterAttachmentPoint)
			}
		}
	}

	if (unevenNumberOfItems(shapes)) {
		selectedAttachmentPoints.push(
			...selectAttachmentPointsFromCenterShape(
				getAttachmentPointsOfCenterShape(shapes)
			)
		)
	}

	selectedAttachmentPoints.push(...selectedCounterAttachmentPoints)

	return selectedAttachmentPoints
}

const unevenNumberOfItems = (arrayOfItems) => {
	return arrayOfItems.length % 2 === 1
}

const getAttachmentPointsOfCenterShape = (shapes) => {
	return shapes[Math.floor(shapes.length / 2)].getAttachmentPoints()
}

const getCenterAttachmentPoint = (attachmentPoints) => {
	return attachmentPoints[Math.floor(attachmentPoints.length / 2)]
}

const selectAttachmentPointsFromCenterShape = (
	attachmentPointsOfCenterShape
) => {
	const selectedAttachmentPointsOfCenterShape = []
	const loopLimit = Math.floor(attachmentPointsOfCenterShape.length / 2)

	for (let k = 0; k < loopLimit; k++) {
		if (Math.random() > 0.5) {
			selectedAttachmentPointsOfCenterShape.push(
				attachmentPointsOfCenterShape[k]
			)
			selectedAttachmentPointsOfCenterShape.push(
				attachmentPointsOfCenterShape[
					attachmentPointsOfCenterShape.length - 1 - k
				]
			)
		}
	}

	if (unevenNumberOfItems(attachmentPointsOfCenterShape)) {
		if (Math.random() > 0.5) {
			selectedAttachmentPointsOfCenterShape.push(
				getCenterAttachmentPoint(attachmentPointsOfCenterShape)
			)
		}
	}

	return selectedAttachmentPointsOfCenterShape
}
