const { Shape } = require('./Shape')
const { AttachmentPoint } = require('./AttachmentPoint')

class Rectangle extends Shape {
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
		this.type = 'rectangle'
		this.width = width
		this.height = height
		this.fill = fill
		this.fillOpacity = fillOpacity
		this.stroke = stroke
		this.strokeOpacity = strokeOpacity
		this.strokeWidth = strokeWidth
		this.calculateAttachmentPoints()
		this.translate = [
			this.attachmentPoints[0].getX(),
			this.attachmentPoints[0].getY(),
		]
		this.rotate = [this.rotationInDegrees]
	}
	calculateInitialAttachmentPoints() {
		this.attachmentPoints.push(new AttachmentPoint(0.0, 0.0)) // 7
		this.attachmentPoints.push(new AttachmentPoint(0.0, this.height / 2.0)) // 6
		this.attachmentPoints.push(new AttachmentPoint(0.0, this.height)) // 5
		this.attachmentPoints.push(new AttachmentPoint(this.width / 2.0, 0.0)) // 0
		this.attachmentPoints.push(
			new AttachmentPoint(this.width / 2.0, this.height / 2.0)
		) // 8
		this.attachmentPoints.push(
			new AttachmentPoint(this.width / 2.0, this.height)
		) // 4
		this.attachmentPoints.push(new AttachmentPoint(this.width, this.height)) // 3
		this.attachmentPoints.push(
			new AttachmentPoint(this.width, this.height / 2.0)
		) // 2
		this.attachmentPoints.push(new AttachmentPoint(this.width, 0.0)) // 1
	}
	calculateNormalAnglesAtAttachmentPoints() {
		this.attachmentPoints[0].setNormalAngle(225 + this.rotationInDegrees) // 7
		this.attachmentPoints[1].setNormalAngle(180 + this.rotationInDegrees) // 6
		this.attachmentPoints[2].setNormalAngle(135 + this.rotationInDegrees) // 5
		this.attachmentPoints[3].setNormalAngle(270 + this.rotationInDegrees) // 0
		this.attachmentPoints[4].setNormalAngle(270 + this.rotationInDegrees) // 8
		this.attachmentPoints[5].setNormalAngle(90 + this.rotationInDegrees) // 4
		this.attachmentPoints[6].setNormalAngle(45 + this.rotationInDegrees) // 3
		this.attachmentPoints[7].setNormalAngle(this.rotationInDegrees) // 2
		this.attachmentPoints[8].setNormalAngle(315 + this.rotationInDegrees) // 1
	}
}

module.exports.Rectangle = Rectangle
