const {
	filterWithPreOperatorOperandDeterminer,
} = require('./filterWithPreOperatorOperandDeterminer')
const {
	filterWithPreOperatorOperand,
} = require('./filterWithPreOperatorOperand')

module.exports.getPreOperatorOperandSelectedShapes = (
	shapes,
	indexOfLatestOperationResultStart,
	preOperatorOperand,
	preOperatorOperandDeterminer
) => {
	const selectedShapes = filterWithPreOperatorOperand(
		shapes,
		indexOfLatestOperationResultStart,
		preOperatorOperand
	)
	console.log('1 getPreOperatorOperandSelectedShapes')
	console.log('1 shapes: ', shapes)
	console.log('1 selectedShapes: ', selectedShapes)
	// filterWithPreOperatorOperandDeterminer(selectedShapes, preOperatorOperandDeterminer)

	return selectedShapes
}
