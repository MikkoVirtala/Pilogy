const uuidv1 = require('uuid/v1')
const { convertDegreesToRadians } = require('./convertDegreesToRadians')
const {
	normalizeDegreesToBetween0And360,
} = require('./normalizeDegreesToBetween0And360')
const { getAverage } = require('../generalHelperFunctions/getAverage')

class Shape {
	constructor(rotationInDegrees, pointToAttach, attachmentPointIndex, visible) {
		this.id = uuidv1()
		this.rotationInDegrees = normalizeDegreesToBetween0And360(rotationInDegrees)
		this.pointToAttach = pointToAttach
		this.attachmentPointIndex = attachmentPointIndex
		this.attachmentPoints = []
		this.visible = visible
		this.children = []
	}
	calculateAttachmentPoints() {
		this.calculateInitialAttachmentPoints()
		this.updateAttachmentPointsAfterRotation()
		this.updateAttachmentPointsAfterConnectingAttachmentPointAndPointToAttach()
		this.calculateNormalAnglesAtAttachmentPoints()
	}
	updateAttachmentPointsAfterRotation() {
		const rotationInRadians = convertDegreesToRadians(this.rotationInDegrees)
		const cos = Math.cos(rotationInRadians)
		const sin = Math.sin(rotationInRadians)
		for (let i = 0; i < this.attachmentPoints.length; i++) {
			const x = this.attachmentPoints[i].getX()
			const y = this.attachmentPoints[i].getY()
			this.attachmentPoints[i].setX(cos * x - sin * y)
			this.attachmentPoints[i].setY(sin * x + cos * y)
		}
	}
	updateAttachmentPointsAfterConnectingAttachmentPointAndPointToAttach() {
		const attachmentPoint = this.attachmentPoints[this.attachmentPointIndex]
		const differenceX = attachmentPoint.getX() - this.pointToAttach.getX()
		const differenceY = attachmentPoint.getY() - this.pointToAttach.getY()
		for (let i = 0; i < this.attachmentPoints.length; i++) {
			this.attachmentPoints[i].setX(
				this.attachmentPoints[i].getX() - differenceX
			)
			this.attachmentPoints[i].setY(
				this.attachmentPoints[i].getY() - differenceY
			)
		}
	}
	getAttachmentPoints() {
		return this.attachmentPoints
	}
	isVisible() {
		return this.visible
	}
	getCentroid(attachmentPoints) {
		return [
			getAverage(
				attachmentPoints.map((attachmentPoint) => attachmentPoint.getX())
			),
			getAverage(
				attachmentPoints.map((attachmentPoint) => attachmentPoint.getY())
			),
		]
	}
	getId() {
		return this.id
	}
	getType() {
		return this.type
	}
	getChildren() {
		return this.children
	}
	addChild(child) {
		this.children.push(child)
	}
	toString() {
		return this.type
	}
}

module.exports.Shape = Shape
