const {
  getPreOperatorOperandSelectedShapes
} = require('./getPreOperatorOperandSelectedShapes')
const {
  getPreOperatorOperandSelectedAttachmentPoints
} = require('./getPreOperatorOperandSelectedAttachmentPoints/getPreOperatorOperandSelectedAttachmentPoints')

module.exports.handlePreOperatorOperand = (
  shapeArray,
  indexOfLatestOperationResultStart,
  preOperatorOperand,
  hierarchicalSequenceRepository
) => {
  const preOperatorOperandSelectedShapes = getPreOperatorOperandSelectedShapes(
    shapeArray,
    indexOfLatestOperationResultStart,
    preOperatorOperand
  )
  return getPreOperatorOperandSelectedAttachmentPoints(
    preOperatorOperandSelectedShapes,
    hierarchicalSequenceRepository
  )
}
