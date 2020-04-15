const { findParentOfShape } = require('./findParentOfShape')

module.exports.findGrandparentOfShape = (shape, shapes) => {
	return findParentOfShape(findParentOfShape(shape, shapes), shapes)
}
