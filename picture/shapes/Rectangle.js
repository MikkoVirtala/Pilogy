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
    visible,
    parentId
  ) {
    super(
      rotationInDegrees,
      pointToAttach,
      attachmentPointIndex,
      visible,
      parentId
    )
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
      this.attachmentPoints[7].getX(),
      this.attachmentPoints[7].getY(),
    ]
    this.rotate = [this.rotationInDegrees]
  }
  calculateInitialAttachmentPoints() {
    this.attachmentPoints.push(new AttachmentPoint(this.width / 2.0, 0.0))
    this.attachmentPoints.push(new AttachmentPoint(this.width, 0.0))
    this.attachmentPoints.push(
      new AttachmentPoint(this.width, this.height / 2.0)
    )
    this.attachmentPoints.push(new AttachmentPoint(this.width, this.height))
    this.attachmentPoints.push(
      new AttachmentPoint(this.width / 2.0, this.height)
    )
    this.attachmentPoints.push(new AttachmentPoint(0.0, this.height))
    this.attachmentPoints.push(new AttachmentPoint(0.0, this.height / 2.0))
    this.attachmentPoints.push(new AttachmentPoint(0.0, 0.0))
    this.attachmentPoints.push(
      new AttachmentPoint(this.width / 2.0, this.height / 2.0)
    )
  }
  calculateNormalAnglesAtAttachmentPoints() {
    this.attachmentPoints[0].setNormalAngle(270 + this.rotationInDegrees)
    this.attachmentPoints[1].setNormalAngle(315 + this.rotationInDegrees)
    this.attachmentPoints[2].setNormalAngle(this.rotationInDegrees)
    this.attachmentPoints[3].setNormalAngle(45 + this.rotationInDegrees)
    this.attachmentPoints[4].setNormalAngle(90 + this.rotationInDegrees)
    this.attachmentPoints[5].setNormalAngle(135 + this.rotationInDegrees)
    this.attachmentPoints[6].setNormalAngle(180 + this.rotationInDegrees)
    this.attachmentPoints[7].setNormalAngle(225 + this.rotationInDegrees)
    this.attachmentPoints[8].setNormalAngle(270 + this.rotationInDegrees)
  }
}

module.exports.Rectangle = Rectangle
