const { Triangle } = require('../../shapes/Triangle')
const { ShapeBuilder } = require('./ShapeBuilder')

class TriangleBuilder extends ShapeBuilder {
	constructor(style) {
		super(style)
		this.width = style.getLength('short')
		this.height = style.getLength('short')
		this.fill = style.getColor()
		this.fillOpacity = style.getOpacity()
	}

	build() {
		return new Triangle(
			this.width,
			this.height,
			this.fill,
			this.fillOpacity,
			this.stroke,
			this.strokeOpacity,
			this.strokeWidth,
			this.rotationInDegrees,
			this.pointToAttach,
			this.attachmentPointIndex,
			this.visible,
			this.parentId
		)
	}
}

module.exports.TriangleBuilder = TriangleBuilder
