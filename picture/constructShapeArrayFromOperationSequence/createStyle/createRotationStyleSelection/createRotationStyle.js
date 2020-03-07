const { getRandomElementInArray } = require('../../../getRandomElementInArray')

const rotationStyleElements = {
	static: ['normal', 'normalPlusContant', 'random'],
	dynamic: [() => 1, counter => counter * 2]
}

module.exports.createRotationStyle = () => {
	return Math.random() > 0.5
		? getRandomElementInArray(rotationStyleElements.dynamic)
		: getRandomElementInArray(rotationStyleElements.static)
}
