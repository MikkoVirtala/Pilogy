module.exports.addTriangle = (newShapes, triangleBuilder, i, pointToAttach) => {
	const originalAttachmentPointIndexOfTriangleBuilder = triangleBuilder.getAttachmentPointIndex()

	if (
		pointToAttach.getShapeType() === 'triangle' &&
		pointToAttach.getAttachmentPointIndex() > 1 &&
		pointToAttach.getAttachmentPointIndex() < 5
	) {
		triangleBuilder.setRotationInDegrees(pointToAttach.getNormalAngle() + 90, i)
	} else {
		triangleBuilder.setRotationInDegrees(pointToAttach.getNormalAngle(), i)
	}

	if (
		pointToAttach.getAttachmentPointIndex() > 1 &&
		pointToAttach.getAttachmentPointIndex() < 5
	) {
		triangleBuilder.setAttachmentPointIndex(3)
	}

	triangleBuilder.setPointToAttach(pointToAttach)
	triangleBuilder.setParentId(pointToAttach.getShapeId())

	newShapes.push(triangleBuilder.build())

	triangleBuilder.setAttachmentPointIndex(
		originalAttachmentPointIndexOfTriangleBuilder
	)
}
