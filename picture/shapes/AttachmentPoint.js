const {
	normalizeDegreesToBetween0And360,
} = require('./normalizeDegreesToBetween0And360')

class AttachmentPoint {
	constructor(x, y) {
		this.x = x
		this.y = y
	}
	setNormalAngle(normalAngle) {
		this.normalAngle = normalizeDegreesToBetween0And360(normalAngle)
	}
	setX(x) {
		this.x = x
	}
	setY(y) {
		this.y = y
	}
	setShapeId(shapeId) {
		this.shapeId
	}
	setShapeParentId(shapeParentId) {
		this.shapeParentId
	}
	getX() {
		return this.x
	}
	getY() {
		return this.y
	}
	getNormalAngle() {
		return this.normalAngle
	}
	getShapeId() {
		return this.shapeId
	}
	getShapeParentId() {
		return this.shapeParentId
	}
	setAttachmentPointIndex(attachmentPointIndex) {
		this.attachmentPointIndex = attachmentPointIndex
	}
	getAttachmentPointIndex() {
		return this.attachmentPointIndex
	}
	setShapeType(shapeType) {
		this.shapeType = shapeType
	}
	getShapeType() {
		return this.shapeType
	}
}

module.exports.AttachmentPoint = AttachmentPoint
