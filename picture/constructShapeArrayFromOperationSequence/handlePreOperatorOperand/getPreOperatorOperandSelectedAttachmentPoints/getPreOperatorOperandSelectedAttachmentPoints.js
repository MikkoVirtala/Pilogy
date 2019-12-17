const {
  selectAttachmentPointsAccordingToHierarchicalSequence
} = require('./selectAttachmentPointsAccordingToHierarchicalSequence')
const {
  getHierarchicalSequenceWithSuitableLength
} = require('./getHierarchicalSequenceWithSuitableLength')

module.exports.getPreOperatorOperandSelectedAttachmentPoints = (
  shapes,
  hierarchicalSequenceRepository
) => {
  let hierarchicalSequencesForDifferentTypesOfShapes = new Map()

  for (let i = 0; i < shapes.length; i++) {
    const shape = shapes[i]
    if (!hierarchicalSequencesForDifferentTypesOfShapes.has(shape.type)) {
      hierarchicalSequencesForDifferentTypesOfShapes.set(
        shape.type,
        getHierarchicalSequenceWithSuitableLength(
          hierarchicalSequenceRepository,
          shape.getAttachmentPoints().length
        )
      )
    }
  }

  return selectAttachmentPointsAccordingToHierarchicalSequence(
    shapes,
    hierarchicalSequencesForDifferentTypesOfShapes
  )
}
