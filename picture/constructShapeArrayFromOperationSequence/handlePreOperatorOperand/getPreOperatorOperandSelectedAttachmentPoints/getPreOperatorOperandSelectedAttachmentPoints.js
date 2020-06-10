const {
	selectAttachmentPointsAccordingToHierarchicalSequence,
} = require('./selectAttachmentPointsAccordingToHierarchicalSequence')
const {
	getHierarchicalSequenceWithSuitableLength,
} = require('./getHierarchicalSequenceWithSuitableLength')

module.exports.getPreOperatorOperandSelectedAttachmentPoints = (
	shapes,
	hierarchicalSequenceRepository
) => {
	// let hierarchicalSequencesForDifferentTypesOfShapes = new Map()

	// for (let i = 0; i < shapes.length; i++) {
	//   const shape = shapes[i]
	//   if (!hierarchicalSequencesForDifferentTypesOfShapes.has(shape.type)) {
	//     hierarchicalSequencesForDifferentTypesOfShapes.set(
	//       shape.type,
	//       getHierarchicalSequenceWithSuitableLength(
	//         hierarchicalSequenceRepository,
	//         shape.getAttachmentPoints().length
	//       )
	//     )
	//   }
	// }

	// return selectAttachmentPointsAccordingToHierarchicalSequence(
	//   shapes,
	//   hierarchicalSequencesForDifferentTypesOfShapes
	// )
	return getSelectedAttachmentPoints(shapes)
}

const getSelectedAttachmentPoints = (shapes) => {
	const attachmentPointsOfShapes = getAttachmentPointsOfShapes(shapes)
	const selectedAttachmentPoints = []
	for (let i = 0; i < 10; i++) {
		const trialResult = selectAttachmentPoints(attachmentPointsOfShapes)
		if (trialResult.length > 0) {
			selectedAttachmentPoints.push(...trialResult)
			break
		}
	}
	if (selectedAttachmentPoints.length < 1) {
		selectedAttachmentPoints.push(...attachmentPointsOfShapes)
	}

	// console.log('selectedAttachmentPoints: ', selectedAttachmentPoints)
	return selectedAttachmentPoints
}

const selectAttachmentPoints = (attachmentPointsOfShapes) => {
	const selectedAttachmentPoints = []
	const loopLimit = Math.floor(attachmentPointsOfShapes.length / 2)

	for (let i = 0; i < loopLimit; i++) {
		if (Math.random() > 0.5) {
			selectedAttachmentPoints.push(attachmentPointsOfShapes[i])
			selectedAttachmentPoints.push(
				attachmentPointsOfShapes[attachmentPointsOfShapes.length - 1 - i]
			)
		}
	}
	if (attachmentPointsOfShapes.length % 2 === 1) {
		if (Math.random() > 0.5) {
			selectedAttachmentPoints.splice(
				Math.floor(selectedAttachmentPoints.length / 2),
				0,
				attachmentPointsOfShapes[loopLimit]
			)
		}
	}
	return selectedAttachmentPoints
}

const getAttachmentPointsOfShapes = (shapes) => {
	const attachmentPointsOfShapes = []

	for (let i = 0; i < shapes.length; i++) {
		attachmentPointsOfShapes.push(...shapes[i].getAttachmentPoints())
	}

	// console.log('attachmentPointsOfShapes: ', attachmentPointsOfShapes)
	return attachmentPointsOfShapes
}
