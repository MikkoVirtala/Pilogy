const {
	getRandomElementInArray,
} = require('../generalHelperFunctions/getRandomElementInArray')
const {
	getRandomIntegerInRangeExcludeMax,
} = require('../generalHelperFunctions/getRandomIntegerInRangeExcludeMax')
const { InfoForCreatingShape } = require('./InfoForCreatingShape')
const {
	numberOfAttachmentPointsInShapes,
} = require('./numberOfAttachmentPointsInShapes')

const shapeTypes = ['circle', 'line', 'rectangle', 'triangle']

const createOperationSequence2 = () => {
	const sequences = []
	sequences.push(addFirstInfoForCreatingShape())
	sequences.push(addSequenceOfInfosForCreatingShapes(5, sequences[0]))

	console.log('sequences: ', sequences)
	return sequences
}

const addFirstInfoForCreatingShape = () => {
	let firstSequence = []
	firstSequence.push(
		new InfoForCreatingShape(
			getRandomElementInArray(Object.keys(numberOfAttachmentPointsInShapes)),
			getRandomIntegerInRangeExcludeMax(0, 360)
		)
	)
	return firstSequence
}

const addSequenceOfInfosForCreatingShapes = (
	length,
	previousSequenceOfInfosForCreatingShapes
) => {
	const sequenceOfInfosForCreatingShapes = []

	sequenceOfInfosForCreatingShapes.push(
		getInfoForCreatingShape(
			previousSequenceOfInfosForCreatingShapes[
				previousSequenceOfInfosForCreatingShapes.length - 1
			]
		)
	)

	for (let i = 1; i < length; i++) {
		sequenceOfInfosForCreatingShapes.push(
			getInfoForCreatingShape(
				sequenceOfInfosForCreatingShapes[
					sequenceOfInfosForCreatingShapes.length - 1
				]
			)
		)
	}

	return sequenceOfInfosForCreatingShapes
}

const getInfoForCreatingShape = (previousShape) => {
	const typeOfShape = getRandomElementInArray(shapeTypes)
	return new InfoForCreatingShape(
		typeOfShape,
		getRandomIntegerInRangeExcludeMax(0, 360),
		getIndexOfAttachmentPoint(previousShape.getShapeType()),
		getIndexOfAttachmentPoint(typeOfShape)
	)
}

const addCounterSequence = (sequence) => {}

const getIndexOfAttachmentPoint = (shapeToAttachNewShape) => {
	return getRandomIntegerInRangeExcludeMax(
		0,
		numberOfAttachmentPointsInShapes[shapeToAttachNewShape]
	)
}

createOperationSequence2()
