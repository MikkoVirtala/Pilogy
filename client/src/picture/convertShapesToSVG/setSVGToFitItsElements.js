const boundingBoxExtraSpaceForStrokeWidthEtc = 200
export default function setSVGToFitItsElements(svg) {
  console.log('setSVGToFitItsElements')
  const boundingBox = svg.getBBox()
  svg.setAttribute(
    'viewBox',
    boundingBox.x -
      boundingBoxExtraSpaceForStrokeWidthEtc +
      ' ' +
      (boundingBox.y - boundingBoxExtraSpaceForStrokeWidthEtc) +
      ' ' +
      (boundingBox.width + boundingBoxExtraSpaceForStrokeWidthEtc) +
      ' ' +
      (boundingBox.height + boundingBoxExtraSpaceForStrokeWidthEtc)
  )
  return svg
}
