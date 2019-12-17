const {
  makeMapOfWhatAttachmentPointsToSelect
} = require('./makeMapOfWhatAttachmentPointsToSelect')

module.exports.selectAttachmentPointsAccordingToHierarchicalSequence = (
  shapes,
  hierarchicalSequencesForDifferentTypesOfShapes
) => {
  let selectedAttachmentPoints = []
  const mapOfWhatAttachmentPointsToSelectForDifferentTypesOfShapes = new Map()

  hierarchicalSequencesForDifferentTypesOfShapes.forEach(
    (hierarchicalSequence, shapeType) => {
      mapOfWhatAttachmentPointsToSelectForDifferentTypesOfShapes.set(
        shapeType,
        makeMapOfWhatAttachmentPointsToSelect(hierarchicalSequence)
      )
    }
  )

  for (let i = 0; i < shapes.length; i++) {
    const shapeType = shapes[i].type
    const attachmentPointsOfShape = shapes[i].getAttachmentPoints()
    const mapOfWhatAttachmentPointsToSelect = mapOfWhatAttachmentPointsToSelectForDifferentTypesOfShapes.get(
      shapeType
    )
    const hierarchicalSequence = hierarchicalSequencesForDifferentTypesOfShapes.get(
      shapeType
    )
    for (let j = 0; j < hierarchicalSequence.length; j++) {
      if (mapOfWhatAttachmentPointsToSelect.get(hierarchicalSequence[j])) {
        selectedAttachmentPoints.push(attachmentPointsOfShape[j])
      }
    }
  }

  return selectedAttachmentPoints
}
