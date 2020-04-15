const {
	getPreOperatorOperandSelectedShapes,
} = require('./getPreOperatorOperandSelectedShapes/getPreOperatorOperandSelectedShapes')
const {
	getPreOperatorOperandSelectedAttachmentPoints,
} = require('./getPreOperatorOperandSelectedAttachmentPoints/getPreOperatorOperandSelectedAttachmentPoints')

module.exports.handlePreOperatorOperand = (
	shapeArray,
	indexOfLatestOperationResultStart,
	preOperatorOperand,
	preOperatorOperandDeterminer,
	hierarchicalSequenceRepository
) => {
	const preOperatorOperandSelectedShapes = getPreOperatorOperandSelectedShapes(
		shapeArray,
		indexOfLatestOperationResultStart,
		preOperatorOperand,
		preOperatorOperandDeterminer
	)
	return getPreOperatorOperandSelectedAttachmentPoints(
		preOperatorOperandSelectedShapes,
		hierarchicalSequenceRepository
	)
}
