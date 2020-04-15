const { findGrandparentOfShape } = require('./findGrandparentOfShape')

module.exports.filterShapesWithSameGrandparent = (grandParentShape, shapes) => {
	return shapes.filter(
		(shape) =>
			findGrandparentOfShape(shape, shapes).getId() === grandParentShape.getId()
	)
}
