const { LineBuilder } = require('./LineBuilder')
const { RectangleBuilder } = require('./RectangleBuilder')
const { CircleBuilder } = require('./CircleBuilder')
const { TriangleBuilder } = require('./TriangleBuilder')
const { RootShapeBuilder } = require('../../RootShapeBuilder')

class ShapeBuilders {
	constructor(style) {
		this.lineBuilder = new LineBuilder(style)
		this.rectangleBuilder = new RectangleBuilder(style)
		this.circleBuilder = new CircleBuilder(style)
		this.triangleBuilder = new TriangleBuilder(style)
		this.rootShapeBuilder = new RootShapeBuilder(style)
	}

	getLineBuilder() {
		return this.lineBuilder
	}
	getRectangleBuilder() {
		return this.rectangleBuilder
	}
	getCircleBuilder() {
		return this.circleBuilder
	}
	getTriangleBuilder() {
		return this.triangleBuilder
	}
	buildRootShape() {
		return rootShapeBuilder.build()
	}
}

module.exports.ShapeBuilders = ShapeBuilders
