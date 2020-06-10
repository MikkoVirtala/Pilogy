const { operate } = require('./handleOperatorAndPostOperatorOperand/operate')
const { Style } = require('./createStyle/Style')
const { Shapes } = require('../shapes/Shapes')

module.exports.constructShapeArrayFromOperationSequence = (
	operationSequence,
	hierarchicalSequenceRepository,
	maxNumberOfShapesInPicture
) => {
	const style = new Style()
	const shapes = new Shapes()
	for (let i = 0; i < operationSequence.length; i++) {
		const newShapes = operate(
			shapes,
			operationSequence[i],
			hierarchicalSequenceRepository,
			style
		)
		if (shapes.getLength() + newShapes.length > maxNumberOfShapesInPicture) {
			break
		}
		shapes.addLevel(newShapes)
	}
	return shapes.flat().filter(function (shape) {
		return shape.isVisible()
	})
}
