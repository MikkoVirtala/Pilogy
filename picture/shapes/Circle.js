const { Shape } = require('./Shape')

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
    this.translate = [this.attachmentPoints[4][0], this.attachmentPoints[4][1]]
    this.rotate = [this.rotationInDegrees]
  }
  calculateInitialAttachmentPoints() {
    this.attachmentPoints.push([0.0, -this.r])
    this.attachmentPoints.push([this.r, 0.0])
    this.attachmentPoints.push([0.0, this.r])
    this.attachmentPoints.push([-this.r, 0.0])
    this.attachmentPoints.push([0.0, 0.0])
  }
  calculateNormalAnglesAtAttachmentPoints() {
    this.normalAnglesAtAttachmentPoints.push(270 + this.rotationInDegrees)
    this.normalAnglesAtAttachmentPoints.push(this.rotationInDegrees)
    this.normalAnglesAtAttachmentPoints.push(90 + this.rotationInDegrees)
    this.normalAnglesAtAttachmentPoints.push(180 + this.rotationInDegrees)
    this.normalAnglesAtAttachmentPoints.push(270 + this.rotationInDegrees)
  }
}

module.exports.Circle = Circle
