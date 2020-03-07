const { createRotationStyle } = require('./createRotationStyle')
const {
	getRandomIntegerInRangeIncludeMax
} = require('../../../getRandomIntegerInRangeIncludeMax')

module.exports.createRotationStyleSelection = () => {
	const numberOfRotationStylesInSelection = getRandomIntegerInRangeIncludeMax(
		1,
		10
	)
	const rotationStyleSelection = []

	for (let i = 0; i < numberOfRotationStylesInSelection; i++) {
		rotationStyleSelection.push(createRotationStyle())
	}

	return rotationStyleSelection
}
