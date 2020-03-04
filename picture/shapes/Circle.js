const { Shape } = require('./Shape')
const { AttachmentPoint } = require('./AttachmentPoint')

class Circle extends Shape {
	constructor(
		r,
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
		this.type = 'circle'
		this.r = r
		this.fill = fill
		this.fillOpacity = fillOpacity
		this.stroke = stroke
		this.strokeOpacity = strokeOpacity
		this.strokeWidth = strokeWidth
		this.cx = 0.0
		this.cy = 0.0
		this.calculateAttachmentPoints()
		this.translate = [
			this.attachmentPoints[4].getX(),
			this.attachmentPoints[4].getY()
		]
		this.rotate = [this.rotationInDegrees]
	}
	calculateInitialAttachmentPoints() {
		this.attachmentPoints.push(new AttachmentPoint(0.0, -this.r))
		this.attachmentPoints.push(new AttachmentPoint(this.r, 0.0))
		this.attachmentPoints.push(new AttachmentPoint(0.0, this.r))
		this.attachmentPoints.push(new AttachmentPoint(-this.r, 0.0))
		this.attachmentPoints.push(new AttachmentPoint(0.0, 0.0))
	}
	calculateNormalAnglesAtAttachmentPoints() {
		this.attachmentPoints[0].setNormalAngle(270 + this.rotationInDegrees)
		this.attachmentPoints[1].setNormalAngle(this.rotationInDegrees)
		this.attachmentPoints[2].setNormalAngle(90 + this.rotationInDegrees)
		this.attachmentPoints[3].setNormalAngle(180 + this.rotationInDegrees)
		this.attachmentPoints[4].setNormalAngle(270 + this.rotationInDegrees)
	}
}

module.exports.Circle = Circle
