const {
	getRandomElementInArray,
} = require('../generalHelperFunctions/getRandomElementInArray')
const {
	getRandomIntegerInRangeExcludeMax,
} = require('../generalHelperFunctions/getRandomIntegerInRangeExcludeMax')
const {
	getRandomElementInArray,
} = require('../generalHelperFunctions/getRandomElementInArray')

const shapeTypes = ['circle', 'line', 'rectangle', 'triangle']

const numberOfAttachmentPointsInShapes = {
	circle: 5,
	line: 3,
	rectangle: 9,
	triangle: 7,
}

class ShapeInfo {
	constructor(
		shapeType,
		rotationInDegrees,
		indexOfAttachmentPoint,
		indexOfPointToAttach
	) {
		this.shapeType = shapeType
		this.rotationInDegrees = rotationInDegrees
		this.indexOfAttachmentPoint = indexOfAttachmentPoint
		this.indexOfPointToAttach = indexOfPointToAttach
	}

	getShapeType() {
		return this.shapeType
	}
	getRotationInDegrees() {
		return this.rotationInDegrees
	}
	getIndexOfAttachmentPoint() {
		return this.indexOfAttachmentPoint
	}
	getIndexOfPointToAttach() {
		return this.indexOfPointToAttach
	}
}

module.exports.createOperationSequence2 = () => {
	const sequenes = []
	sequences.push(addFirstSequence())
	sequences.push(addSequence(5))

	return sequences
}

const addFirstSequence = () => {
	firstSequence = []
	firstSequence.push(
		new ShapeInfo(
			getRandomElementInArray(Object.keys(numberOfAttachmentPointsInShapes)),
			getRandomIntegerInRangeExcludeMax(0, 360)
		)
	)
	return firstSequence
}

const addSequence = (length, previousSequence) => {
	const sequence = []
	const lastItemOfPreviousSequence =
		previousSequence[previousSequence.length - 1]
	const previousItemType = lastItemOfPreviousSequence.getShapeType()

	for (let i = 0; i < length; i++) {
		const typeOfNewShape = getRandomElementInArray(
			Object.keys(numberOfAttachmentPointsInShapes)
		)
		sequence.push(
			new ShapeInfo(
				typeOfNewShape,
				getRandomIntegerInRangeExcludeMax(0, 360),
				getIndexOfAttachmentPoint(previousItemType),
				getIndexOfAttachmentPoint(typeOfNewShape)
			)
		)
		previousItemType = newItem[1]
	}

	return sequence
}

const getShape = (previousShape) => {
	return
	new ShapeInfo(
		getRandomElementInArray(shapeTypes),
		getRandomIntegerInRangeExcludeMax(0, 360),
		getIndexOfAttachmentPoint(previousShape.getShapeType()),
		getIndexOfAttachmentPoint(typeOfNewShape)
	)
}

const addCounterSequence = (sequence) => {}

const getIndexOfAttachmentPoint = (shapeToAttachNewShape) => {
	return getRandomIntegerInRangeExcludeMax(
		0,
		numberOfAttachmentPointsInShapes[shapeToAttachNewShape]
	)
}
