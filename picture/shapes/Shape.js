const uuidv1 = require('uuid/v1')
const { convertDegreesToRadians } = require('./convertDegreesToRadians')

class Shape {
  constructor(rotationInDegrees, pointToAttach, attachmentPointIndex, visible) {
    this.id = uuidv1()
    this.rotationInDegrees = this.makeRotationInDegreesBetween0And360(
      rotationInDegrees
    )
    this.pointToAttach = pointToAttach
    this.attachmentPointIndex = attachmentPointIndex
    this.attachmentPoints = []
    this.visible = visible
  }
  makeRotationInDegreesBetween0And360(rotationInDegrees) {
    while (rotationInDegrees >= 360) {
      rotationInDegrees -= 360
    }
    while (rotationInDegrees < 0) {
      rotationInDegrees += 360
    }
    return rotationInDegrees
  }
  calculateAttachmentPoints() {
    this.calculateInitialAttachmentPoints()
    this.updateAttachmentPointsAfterRotation()
    this.updateAttachmenPointsAfterConnectingAttachmentPointAndPointToAttach()
  }
  updateAttachmentPointsAfterRotation() {
    const rotationInRadians = convertDegreesToRadians(this.rotationInDegrees)
    const cos = Math.cos(rotationInRadians)
    const sin = Math.sin(rotationInRadians)
    for (let i = 0; i < this.attachmentPoints.length; i++) {
      const x = this.attachmentPoints[i][0]
      const y = this.attachmentPoints[i][1]
      this.attachmentPoints[i][0] = cos * x - sin * y
      this.attachmentPoints[i][1] = sin * x + cos * y
    }
  }
  updateAttachmenPointsAfterConnectingAttachmentPointAndPointToAttach() {
    const attachmentPoint = this.attachmentPoints[this.attachmentPointIndex]
    const differenceX = attachmentPoint[0] - this.pointToAttach[0]
    const differenceY = attachmentPoint[1] - this.pointToAttach[1]
    for (let i = 0; i < this.attachmentPoints.length; i++) {
      this.attachmentPoints[i][0] = this.attachmentPoints[i][0] - differenceX
      this.attachmentPoints[i][1] = this.attachmentPoints[i][1] - differenceY
    }
  }
  getAttachmentPoints() {
    return this.attachmentPoints
  }
  isVisible() {
    return this.visible
  }
  getCentroid(points) {
    const x =
      points.reduce((total, value) => {
        return total + value[0]
      }, 0) / points.length
    const y =
      points.reduce((total, value) => {
        return total + value[1]
      }, 0) / points.length
    return [x, y]
  }
}

module.exports.Shape = Shape
