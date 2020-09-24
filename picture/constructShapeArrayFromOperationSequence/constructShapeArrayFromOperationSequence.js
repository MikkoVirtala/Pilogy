const { operate } = require('./handleOperatorAndPostOperatorOperand/operate')
const { Style } = require('./createStyle/Style')
const { Shapes } = require('../shapes/Shapes')
const {
	createOperationSequence2,
} = require('../createOperationSequence/createOperationSequence2')

module.exports.constructShapeArrayFromOperationSequence = (
	operationSequence,
	maxNumberOfShapesInPicture
) => {
	console.log('createOperationSequence2: ', createOperationSequence2)

	const style = new Style()
	const shapes = new Shapes()
	for (let i = 0; i < operationSequence.length; i++) {
		const newShapes = operate(shapes, operationSequence[i], style)
		if (shapes.getLength() + newShapes.length > maxNumberOfShapesInPicture) {
			break
		}
		shapes.addLevel(newShapes)
	}
	return shapes.flat().filter(function (shape) {
		return shape.isVisible()
	})
}
