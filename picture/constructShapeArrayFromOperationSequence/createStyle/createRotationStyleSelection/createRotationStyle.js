const { getRandomElementInArray } = require('../../../getRandomElementInArray')

const normal = ({ normal }) => {
	return normal
}

const getNormalPlus15TimesXFunctions = () => {
	normalPlus15TimesXFunctions = []
	for (let i = 1; i < 24; i++) {
		normalPlus15TimesXFunctions.push(
			new Function(
				'return function ' +
					`normalPlus15Times${i}` +
					`({ normal }) { return normal + ${i * 15} }`
			)()
		)
	}
	return normalPlus15TimesXFunctions
}

const normalPlusConstant = ({ normal, constant }) => {
	return normal + constant
}

const normalMinusConstant = ({ normal, constant }) => {
	return normal - constant
}

const normalPlusCounter = ({ normal, counter }) => {
	return normal + counter
}

const normalMinusCounter = ({ normal, counter }) => {
	return normal - counter
}

const rotationStyles = [
	normal,
	...getNormalPlus15TimesXFunctions(),
	normalPlusConstant,
	normalMinusConstant,
	normalPlusCounter,
	normalMinusCounter,
]

module.exports.createRotationStyle = () => {
	return getRandomElementInArray(rotationStyles)
}
