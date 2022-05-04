const { Shape } = require('./Shape')
const { AttachmentPoint } = require('./AttachmentPoint')

class Line extends Shape {
	constructor(
		length,
		stroke,
		strokeOpacity,
		strokeWidth,
		rotationInDegrees,
		pointToAttach,
		attachmentPointIndex,
		visible
	) {
		super(rotationInDegrees, pointToAttach, attachmentPointIndex, visible)
		this.type = 'line'
		this.length = length
		this.stroke = stroke
		this.strokeOpacity = strokeOpacity
		this.strokeWidth = strokeWidth
		this.x1 = 0.0
		this.y1 = 0.0
		this.x2 = length
		this.y2 = 0.0
		this.calculateAttachmentPoints()
		this.translate = [
			this.attachmentPoints[0].getX(),
			this.attachmentPoints[0].getY(),
		]
		this.rotate = [this.rotationInDegrees]
	}
	calculateInitialAttachmentPoints() {
		this.attachmentPoints.push(new AttachmentPoint(0.0, 0.0))
		this.attachmentPoints.push(new AttachmentPoint(this.length / 2.0, 0.0))
		this.attachmentPoints.push(new AttachmentPoint(this.length, 0.0))
	}
	calculateNormalAnglesAtAttachmentPoints() {
		this.attachmentPoints[0].setNormalAngle(this.rotationInDegrees)
		this.attachmentPoints[1].setNormalAngle(this.rotationInDegrees)
		this.attachmentPoints[2].setNormalAngle(this.rotationInDegrees)
	}
}

module.exports.Line = Line
