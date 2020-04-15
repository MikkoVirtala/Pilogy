const { filterShapesWithSameParent } = require('./filterShapesWithSameParent')
const {
	filterShapesWithSameGrandparent,
} = require('./filterShapesWithSameGrandparent')
const {
	getRandomElementInArray,
} = require('../../../generalHelperFunctions/getRandomElementInArray')

module.exports.filterWithPreOperatorOperandDeterminer = (
	shapes,
	preOperatorOperandDeterminer
) => {
	switch (preOperatorOperandDeterminer) {
		case 'ofSameParent':
			return filterShapesWithSameParent(getRandomElementInArray(shapes), shapes)
		case 'ofSameGrandparent':
			return filterShapesWithSameGrandparent(
				getRandomElementInArray(shapes),
				shapes
			)
		case 'ofAllAncestry':
			return shapes
		default:
			return []
	}
}
