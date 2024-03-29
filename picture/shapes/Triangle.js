const { Shape } = require('./Shape')
const { AttachmentPoint } = require('./AttachmentPoint')

class Triangle extends Shape {
	constructor(
		width,
		height,
		fill,
		fillOpacity,
		stroke,
		strokeOpacity,
		strokeWidth,
		rotationInDegrees,
		pointToAttach,
		attachmentPointIndex,
		visible
	) {
		super(rotationInDegrees, pointToAttach, attachmentPointIndex, visible)
		this.type = 'triangle'
		this.width = width
		this.height = height
		this.fill = fill
		this.fillOpacity = fillOpacity
		this.stroke = stroke
		this.strokeOpacity = strokeOpacity
		this.strokeWidth = strokeWidth
		this.calculateAttachmentPoints()
		this.points = [
			[this.attachmentPoints[2].getX(), this.attachmentPoints[2].getY()],
			[this.attachmentPoints[6].getX(), this.attachmentPoints[6].getY()],
			[this.attachmentPoints[0].getX(), this.attachmentPoints[0].getY()],
		]
	}
	calculateInitialAttachmentPoints() {
		this.attachmentPoints.push(new AttachmentPoint(0.0, this.height)) // 4
		this.attachmentPoints.push(
			new AttachmentPoint(this.width / 4.0, this.height / 2.0)
		) // 5
		this.attachmentPoints.push(new AttachmentPoint(this.width / 2.0, 0.0)) // 0
		this.attachmentPoints.push(
			new AttachmentPoint(this.width / 2.0, this.height)
		) // 3
		this.attachmentPoints.push(
			new AttachmentPoint((this.width * 3.0) / 4.0, this.height / 2.0)
		) // 1
		this.attachmentPoints.push(new AttachmentPoint(this.width, this.height)) // 2
		const centroid = this.getCentroid([
			this.attachmentPoints[2],
			this.attachmentPoints[5],
			this.attachmentPoints[0],
		])
		this.attachmentPoints.splice(
			3,
			0,
			new AttachmentPoint(centroid[0], centroid[1])
		) // 6
	}
	calculateNormalAnglesAtAttachmentPoints() {
		const topAngle = this.calculateTopAngle()
		const baseAngle = (180 - topAngle) / 2.0
		this.attachmentPoints[0].setNormalAngle(
			180 - baseAngle / 2.0 + this.rotationInDegrees
		) // 4
		this.attachmentPoints[1].setNormalAngle(
			topAngle + baseAngle + 90 + this.rotationInDegrees
		) // 5
		this.attachmentPoints[2].setNormalAngle(270 + this.rotationInDegrees) // 0
		this.attachmentPoints[3].setNormalAngle(270 + this.rotationInDegrees) // 6
		this.attachmentPoints[4].setNormalAngle(90 + this.rotationInDegrees) // 3
		this.attachmentPoints[5].setNormalAngle(
			this.rotationInDegrees - topAngle / 2.0
		) // 1
		this.attachmentPoints[6].setNormalAngle(
			baseAngle / 2.0 + this.rotationInDegrees
		) // 2
	}
	calculateTopAngle() {
		const halfOfWidth = this.width / 2.0
		return 2.0 * Math.atan(halfOfWidth / this.height) * (180 / Math.PI)
	}
}

module.exports.Triangle = Triangle
