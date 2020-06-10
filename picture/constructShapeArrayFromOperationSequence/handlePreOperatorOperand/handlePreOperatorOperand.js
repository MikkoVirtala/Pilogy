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
	return getPreOperatorOperandSelectedAttachmentPoints(
		preOperatorOperandSelectedShapes,
		hierarchicalSequenceRepository
	)
}
