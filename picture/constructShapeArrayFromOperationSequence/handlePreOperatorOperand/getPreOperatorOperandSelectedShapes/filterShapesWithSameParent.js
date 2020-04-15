module.exports.filterShapesWithSameParent = (parentShape, shapes) => {
	return shapes.filter((shape) => shape.getParentId() === parentShape.getId())
}
