const {
	handlePreOperatorOperand,
} = require('../handlePreOperatorOperand/handlePreOperatorOperand')
const { getInitializingShape } = require('../getInitializingShape')
const { LineBuilder } = require('./LineBuilder')
const { RectangleBuilder } = require('./RectangleBuilder')
const { CircleBuilder } = require('./CircleBuilder')
const { TriangleBuilder } = require('./TriangleBuilder')
const { selectAttachmentPoints } = require('./selectAttachmentPoints')

module.exports.operate = (
	shapes,
	operation,
	hierarchicalSequenceRepository,
	style
) => {
	let newShapes = []

	if (operation.operator === 'initialize') {
		newShapes.push(getInitializingShape(style, operation.resultIsVisible))
		return newShapes
	}

	// const selectedAttachmentPoints = handlePreOperatorOperand(
	// 	shapeArray,
	// 	indexOfLatestOperationResultStart,
	// 	operation.preOperatorOperand,
	// 	operation.preOperatorOperandDeterminer,
	// 	hierarchicalSequenceRepository
	// )

	const selectedAttachmentPoints = selectAttachmentPoints(
		shapes.getLatestLevel()
	)

	let lineBuilder = new LineBuilder(style)
	let rectangleBuilder = new RectangleBuilder(style)
	let circleBuilder = new CircleBuilder(style)
	let triangleBuilder = new TriangleBuilder(style)

	for (let i = 0; i < selectedAttachmentPoints.length; i++) {
		const attachmentPoint = selectedAttachmentPoints[i]
		const normal = attachmentPoint.getNormalAngle()
		if (operation.operator === 'add') {
			if (operation.postOperatorOperand === 'line') {
				lineBuilder.setRotationInDegrees(normal, i)
				lineBuilder.setPointToAttach(attachmentPoint)
				lineBuilder.setVisibility(operation.resultIsVisible)
				lineBuilder.setParentId(attachmentPoint.getShapeId())
				newShapes.push(lineBuilder.build())
			} else if (operation.postOperatorOperand === 'rectangle') {
				rectangleBuilder.setRotationInDegrees(normal, i)
				rectangleBuilder.setPointToAttach(attachmentPoint)
				rectangleBuilder.setVisibility(operation.resultIsVisible)
				rectangleBuilder.setParentId(attachmentPoint.getShapeId())
				newShapes.push(rectangleBuilder.build())
			} else if (operation.postOperatorOperand === 'circle') {
				circleBuilder.setRotationInDegrees(normal, i)
				circleBuilder.setPointToAttach(attachmentPoint)
				circleBuilder.setVisibility(operation.resultIsVisible)
				circleBuilder.setParentId(attachmentPoint.getShapeId())
				newShapes.push(circleBuilder.build())
			} else if (operation.postOperatorOperand === 'triangle') {
				triangleBuilder.setRotationInDegrees(normal, i)
				triangleBuilder.setPointToAttach(attachmentPoint)
				triangleBuilder.setVisibility(operation.resultIsVisible)
				triangleBuilder.setParentId(attachmentPoint.getShapeId())
				newShapes.push(triangleBuilder.build())
			}
		}
	}

	return newShapes
}
