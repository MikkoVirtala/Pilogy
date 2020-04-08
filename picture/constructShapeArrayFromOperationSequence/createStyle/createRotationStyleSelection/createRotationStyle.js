const { getRandomElementInArray } = require('../../../getRandomElementInArray')

const normal = ({ normal }) => {
	return normal
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
	normalPlusConstant,
	normalMinusConstant,
	// normalPlusCounter,
	// normalMinusCounter,
]

module.exports.createRotationStyle = () => {
	return getRandomElementInArray(rotationStyles)
}
