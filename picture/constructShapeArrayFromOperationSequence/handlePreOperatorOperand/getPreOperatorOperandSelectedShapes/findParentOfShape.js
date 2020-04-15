module.exports.findParentOfShape = (shape, shapes) => {
	return shapes.find(
		(shapeFromShapes) => shapeFromShapes.getParentId() === shape.getParentId()
	)
}
