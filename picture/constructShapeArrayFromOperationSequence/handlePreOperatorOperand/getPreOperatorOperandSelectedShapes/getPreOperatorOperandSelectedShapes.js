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
	return filterWithPreOperatorOperandDeterminer(
		filterWithPreOperatorOperand(
			shapes,
			indexOfLatestOperationResultStart,
			preOperatorOperand
		),
		preOperatorOperandDeterminer
	)
}
