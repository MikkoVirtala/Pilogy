const { Shape } = require('./Shape')

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
      this.attachmentPoints[0],
      this.attachmentPoints[2],
      this.attachmentPoints[4]
    ]
  }
  calculateInitialAttachmentPoints() {
    this.attachmentPoints.push([this.width / 2.0, 0.0])
    this.attachmentPoints.push([(this.width * 3.0) / 4.0, this.height / 2.0])
    this.attachmentPoints.push([this.width, this.height])
    this.attachmentPoints.push([this.width / 2.0, this.height])
    this.attachmentPoints.push([0.0, this.height])
    this.attachmentPoints.push([this.width / 4.0, this.height / 2.0])
    this.attachmentPoints.push(
      this.getCentroid([
        this.attachmentPoints[0],
        this.attachmentPoints[2],
        this.attachmentPoints[4]
      ])
    )
  }
  calculateNormalAnglesAtAttachmentPoints() {
    var topAngle = this.calculateTopAngle()
    this.normalAnglesAtAttachmentPoints.push(270 + this.rotationInDegrees)
    this.normalAnglesAtAttachmentPoints.push(
      90 - topAngle / 2.0 + 270 + this.rotationInDegrees
    )
    this.normalAnglesAtAttachmentPoints.push(
      (180 - topAngle) / 4.0 + this.rotationInDegrees
    )
    this.normalAnglesAtAttachmentPoints.push(90 + this.rotationInDegrees)
    this.normalAnglesAtAttachmentPoints.push(
      (180 - topAngle) / 4.0 + 90 + this.rotationInDegrees
    )
    this.normalAnglesAtAttachmentPoints.push(
      topAngle + (180 - topAngle / 2.0) + 90 + this.rotationInDegrees
    )
    this.normalAnglesAtAttachmentPoints.push(270 + this.rotationInDegrees)
  }
  calculateTopAngle() {
    return 2.0 * Math.tan(this.width / 2.0 / this.height)
  }
}

module.exports.Triangle = Triangle
