const getSvgElementType = shapeType => {
  if (shapeType === 'rectangle') return 'rect'
  if (shapeType === 'triangle') return 'polygon'
  return shapeType
}

export default getSvgElementType
