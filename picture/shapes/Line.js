const { Shape } = require('./Shape')

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
    this.translate = [this.attachmentPoints[0][0], this.attachmentPoints[0][1]]
    this.rotate = [this.rotationInDegrees]
  }
  calculateInitialAttachmentPoints() {
    this.attachmentPoints.push([0.0, 0.0])
    this.attachmentPoints.push([this.length / 2.0, 0.0])
    this.attachmentPoints.push([this.length, 0.0])
  }
  calculateNormalAnglesAtAttachmentPoints() {
    this.normalAnglesAtAttachmentPoints.push(rotationInDegrees)
    this.normalAnglesAtAttachmentPoints.push(rotationInDegrees)
    this.normalAnglesAtAttachmentPoints.push(rotationInDegrees)
  }
}

module.exports.Line = Line
