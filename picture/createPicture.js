// const {
// 	createHierarchicalSequenceRepository,
// } = require('./createHierarchicalSequenceRepository/createHierarchicalSequenceRepository')
// const {
// 	createOperationSequence,
// } = require('./createOperationSequence/createOperationSequence')
// const {
// 	constructShapeArrayFromOperationSequence,
// } = require('./constructShapeArrayFromOperationSequence/constructShapeArrayFromOperationSequence')
// const {
// 	getRandomIntegerInRangeExcludeMax,
// } = require('./generalHelperFunctions/getRandomIntegerInRangeExcludeMax')
// const {
// 	roundNumbersInShapes,
// } = require('./generalHelperFunctions/roundNumbers/roundNumbersInShapes')
const { Style } = require('./constructShapeArrayFromOperationSequence/createStyle/Style')
const { createRoot }

module.exports.createPicture = (maxNumberOfShapesInPicture) => {
	let shapes = []
	const style = new Style()
	const shapeBuilders = new shapeBuilders(style)
	//const root = new Shapes()

	// while (shapes.getLength() < maxNumberOfShapesInPicture) {

	// }
	// const minimumNumberOfShapesInPicture = maxNumberOfShapesInPicture * 0.5
	// for (let i = 0; i < 1; i++) {
	// 	// 1000
	// 	const hierarchicalSequenceRepository = createHierarchicalSequenceRepository(
	// 		3
	// 	)
	// 	const operationSequence = createOperationSequence(
	// 		getRandomIntegerInRangeExcludeMax(8, 30)
	// 	)
	// 	shapes = constructShapeArrayFromOperationSequence(
	// 		operationSequence,
	// 		maxNumberOfShapesInPicture
	// 	)
	// 	console.log('shapes.length: ', shapes.length)
	// 	console.log(
	// 		'minimumNumberOfShapesInPicture: ',
	// 		minimumNumberOfShapesInPicture
	// 	)
	// 	if (shapes.length > minimumNumberOfShapesInPicture) {
	// 		console.log(
	// 			'shapes.length > minimumNumberOfShapesInPicture: ',
	// 			shapes.length
	// 		)
	// 		console.log('trials: ', i)
	// 		break
	// 	}
	// }

	shapes = roundNumbersInShapes(shapes)
	return shapes
}
