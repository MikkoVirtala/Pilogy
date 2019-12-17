import {
  positionAttributes,
  styleAttributes,
  transformAttributes
} from './svgAttributes'
import getSvgElementType from './getSvgElementType'
import convertCamelCaseToSlugCase from './convertCamelCaseToSlugCase'

const attributeValueToString = attributeValue => {
  if (Array.isArray(attributeValue)) return attributeValue.join(' ')
  return attributeValue
}

export default function convertShapeToSVG(shape) {
  let shapeSVG = document.createElementNS(
    'http://www.w3.org/2000/svg',
    getSvgElementType(shape.type)
  )
  let transform = ''
  const keys = Object.keys(shape)

  for (let i = 0; i < keys.length; i++) {
    const attributeName = keys[i]
    const attributeValue = shape[attributeName]
      ? attributeValueToString(shape[attributeName])
      : undefined
    if (attributeValue) {
      if (
        positionAttributes.includes(attributeName) ||
        styleAttributes.includes(attributeName)
      ) {
        shapeSVG.setAttribute(
          convertCamelCaseToSlugCase(attributeName),
          attributeValue
        )
      } else if (transformAttributes.includes(attributeName)) {
        transform +=
          convertCamelCaseToSlugCase(attributeName) +
          '(' +
          attributeValue +
          ') '
      }
    }
  }

  if (transform.length > 0) shapeSVG.setAttribute('transform', transform.trim())
  return shapeSVG
}
