class InfoForCreatingShape {
	constructor(
		shapeType,
		rotationInDegrees,
		indexOfAttachmentPoint,
		indexOfPointToAttach
	) {
		this.shapeType = shapeType
		this.rotationInDegrees = rotationInDegrees
		this.indexOfAttachmentPoint = indexOfAttachmentPoint
		this.indexOfPointToAttach = indexOfPointToAttach
	}

	getShapeType() {
		return this.shapeType
	}
	getRotationInDegrees() {
		return this.rotationInDegrees
	}
	getIndexOfAttachmentPoint() {
		return this.indexOfAttachmentPoint
	}
	getIndexOfPointToAttach() {
		return this.indexOfPointToAttach
	}
}
