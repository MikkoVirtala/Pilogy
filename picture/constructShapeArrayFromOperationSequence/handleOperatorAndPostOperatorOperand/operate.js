const { getInitializingShape } = require('../RootShapeBuilder')
const { LineBuilder } = require('./builders/LineBuilder')
const { RectangleBuilder } = require('./builders/RectangleBuilder')
const { CircleBuilder } = require('./builders/CircleBuilder')
const { TriangleBuilder } = require('./builders/TriangleBuilder')
const { selectAttachmentPoints } = require('./selectAttachmentPoints')
const { addTriangle } = require('./addTriangle')
const { addCounterTriangle } = require('./addCounterTriangle')

module.exports.operate = (shapes, operation, style) => {
	let newShapes = []
	let newCounterShapes = []

	if (operation.operator === 'initialize') {
		newShapes.push(getInitializingShape(style, operation.resultIsVisible))
		return newShapes
	}

	const selectedAttachmentPointsAndCounterAttachmentPoints = selectAttachmentPoints(
		shapes.getLatestLevel()
	)
	const selectedAttachmentPoints =
		selectedAttachmentPointsAndCounterAttachmentPoints.selectedAttachmentPoints
	const selectedCounterAttachmentPoints =
		selectedAttachmentPointsAndCounterAttachmentPoints.selectedCounterAttachmentPoints

	console.log(
		'selectedAttachmentPoints.length: ',
		selectedAttachmentPoints.length
	)
	console.log(
		'selectedCounterAttachmentPoints.length: ',
		selectedCounterAttachmentPoints.length
	)

	let lineBuilder = new LineBuilder(style)
	let rectangleBuilder = new RectangleBuilder(style)
	let circleBuilder = new CircleBuilder(style)
	let triangleBuilder = new TriangleBuilder(style)

	for (let i = 0; i < selectedAttachmentPoints.length; i++) {
		const attachmentPoint = selectedAttachmentPoints[i]
		const counterAttachmentPoint =
			selectedCounterAttachmentPoints[
				selectedCounterAttachmentPoints.length - 1 - i
			]
		if (operation.operator === 'add') {
			if (operation.postOperatorOperand === 'line') {
				lineBuilder.setRotationInDegrees(attachmentPoint.getNormalAngle(), i)
				lineBuilder.setPointToAttach(attachmentPoint)
				lineBuilder.setVisibility(operation.resultIsVisible)
				lineBuilder.setParentId(attachmentPoint.getShapeId())
				newShapes.push(lineBuilder.build())
				if (counterAttachmentPoint) {
					lineBuilder.setRotationInDegrees(
						counterAttachmentPoint.getNormalAngle(),
						i
					)
					lineBuilder.setPointToAttach(counterAttachmentPoint)
					lineBuilder.setVisibility(operation.resultIsVisible)
					lineBuilder.setParentId(counterAttachmentPoint.getShapeId())
					newShapes.push(lineBuilder.build())
				}
			} else if (operation.postOperatorOperand === 'rectangle') {
				rectangleBuilder.setRotationInDegrees(
					attachmentPoint.getNormalAngle(),
					i
				)
				rectangleBuilder.setPointToAttach(attachmentPoint)
				rectangleBuilder.setVisibility(operation.resultIsVisible)
				rectangleBuilder.setParentId(attachmentPoint.getShapeId())
				newShapes.push(rectangleBuilder.build())
				if (counterAttachmentPoint) {
					rectangleBuilder.setRotationInDegrees(
						counterAttachmentPoint.getNormalAngle() + 180,
						i
					)
					rectangleBuilder.setPointToAttach(counterAttachmentPoint)
					rectangleBuilder.setVisibility(operation.resultIsVisible)
					rectangleBuilder.setParentId(counterAttachmentPoint.getShapeId())

					const attachmentPointIndex = rectangleBuilder.getAttachmentPointIndex()
					const counterAttachmentPointIndex =
						rectangleBuilder.getNumberOfAttachmentPoints() -
						1 -
						attachmentPointIndex
					rectangleBuilder.setAttachmentPointIndex(counterAttachmentPointIndex)

					newShapes.push(rectangleBuilder.build())

					rectangleBuilder.setAttachmentPointIndex(attachmentPointIndex)
				}
			} else if (operation.postOperatorOperand === 'circle') {
				circleBuilder.setRotationInDegrees(attachmentPoint.getNormalAngle(), i)
				circleBuilder.setPointToAttach(attachmentPoint)
				circleBuilder.setVisibility(operation.resultIsVisible)
				circleBuilder.setParentId(attachmentPoint.getShapeId())
				newShapes.push(circleBuilder.build())
				if (counterAttachmentPoint) {
					circleBuilder.setRotationInDegrees(
						counterAttachmentPoint.getNormalAngle(),
						i
					)
					circleBuilder.setPointToAttach(counterAttachmentPoint)
					circleBuilder.setVisibility(operation.resultIsVisible)
					circleBuilder.setParentId(counterAttachmentPoint.getShapeId())
					newShapes.push(circleBuilder.build())
				}
			} else if (operation.postOperatorOperand === 'triangle') {
				triangleBuilder.setVisibility(operation.resultIsVisible)
				addTriangle(newShapes, triangleBuilder, i, attachmentPoint)
				if (counterAttachmentPoint) {
					addCounterTriangle(
						newCounterShapes,
						triangleBuilder,
						i,
						counterAttachmentPoint
					)
				}
			}
		}
	}

	return [...newShapes, ...newCounterShapes]
}
