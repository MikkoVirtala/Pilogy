import convertShapeToSVG from './convertShapeToSVG'

export default function convertShapesToSVG(shapes) {
  console.log('start convertShapesToSVG')
  let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  svg.setAttribute('id', 'svgPicture')
  svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
  for (let i = 0; i < shapes.length; i++) {
    svg.appendChild(convertShapeToSVG(shapes[i]))
  }
  console.log('finish convertShapesToSVG')
  return svg
}
