module.exports.addCounterTriangle = (
	newCounterShapes,
	triangleBuilder,
	i,
	pointToAttach
) => {
	const originalAttachmentPointIndexOfTriangleBuilder = triangleBuilder.getAttachmentPointIndex()

	triangleBuilder.setRotationInDegrees(pointToAttach.getNormalAngle() + 90, i)
	// if (
	// 	pointToAttach.getShapeType() === 'triangle' &&
	// 	pointToAttach.getAttachmentPointIndex() > 1 &&
	// 	pointToAttach.getAttachmentPointIndex() < 5
	// ) {
	// 	triangleBuilder.setRotationInDegrees(pointToAttach.getNormalAngle() + 90, i)
	// } else {
	// 	triangleBuilder.setRotationInDegrees(
	// 		pointToAttach.getNormalAngle() + 180,
	// 		i
	// 	)
	// }
	if (
		pointToAttach.getAttachmentPointIndex() > 1 &&
		pointToAttach.getAttachmentPointIndex() < 5
	) {
		triangleBuilder.setAttachmentPointIndex(3)
	} else if (
		triangleBuilder.getAttachmentPointIndex() < 2 ||
		triangleBuilder.getAttachmentPointIndex() > 4
	) {
		triangleBuilder.setAttachmentPointIndex(
			triangleBuilder.getNumberOfAttachmentPoints() -
				1 -
				triangleBuilder.getAttachmentPointIndex()
		)
	}
	triangleBuilder.setPointToAttach(pointToAttach)
	triangleBuilder.setParentId(pointToAttach.getShapeId())

	newCounterShapes.unshift(triangleBuilder.build())

	triangleBuilder.setAttachmentPointIndex(
		originalAttachmentPointIndexOfTriangleBuilder
	)
}
