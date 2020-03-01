const { Shape } = require('./Shape')

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
    this.translate = [this.attachmentPoints[7][0], this.attachmentPoints[7][1]]
    this.rotate = [this.rotationInDegrees]
  }
  calculateInitialAttachmentPoints() {
    this.attachmentPoints.push([this.width / 2.0, 0.0])
    this.attachmentPoints.push([this.width, 0.0])
    this.attachmentPoints.push([this.width, this.height / 2.0])
    this.attachmentPoints.push([this.width, this.height])
    this.attachmentPoints.push([this.width / 2.0, this.height])
    this.attachmentPoints.push([0.0, this.height])
    this.attachmentPoints.push([0.0, this.height / 2.0])
    this.attachmentPoints.push([0.0, 0.0])
    this.attachmentPoints.push([this.width / 2.0, this.height / 2.0])
  }
  calculateNormalAnglesAtAttachmentPoints() {
    this.normalAnglesAtAttachmentPoints.push(270 + this.rotationInDegrees)
    this.normalAnglesAtAttachmentPoints.push(315 + this.rotationInDegrees)
    this.normalAnglesAtAttachmentPoints.push(this.rotationInDegrees)
    this.normalAnglesAtAttachmentPoints.push(45 + this.rotationInDegrees)
    this.normalAnglesAtAttachmentPoints.push(90 + this.rotationInDegrees)
    this.normalAnglesAtAttachmentPoints.push(135 + this.rotationInDegrees)
    this.normalAnglesAtAttachmentPoints.push(180 + this.rotationInDegrees)
    this.normalAnglesAtAttachmentPoints.push(225 + this.rotationInDegrees)
    this.normalAnglesAtAttachmentPoints.push(270 + this.rotationInDegrees)
  }
}

module.exports.Rectangle = Rectangle
