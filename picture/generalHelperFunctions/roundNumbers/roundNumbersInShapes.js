const { roundNumber } = require('./roundNumber')

module.exports.roundNumbersInShapes = shapes => {
	for (let i = 0; i < shapes.length; i++) {
		const shape = shapes[i]

		if (shape.width) {
			shape.width = roundNumber(shape.width)
		}

		if (shape.height) {
			shape.height = roundNumber(shape.height)
		}

		if (shape.x) {
			shape.x = roundNumber(shape.x)
		}

		if (shape.y) {
			shape.y = roundNumber(shape.y)
		}

		if (shape.x1) {
			shape.x1 = roundNumber(shape.x1)
		}

		if (shape.y1) {
			shape.y1 = roundNumber(shape.y1)
		}

		if (shape.x2) {
			shape.x2 = roundNumber(shape.x2)
		}

		if (shape.y2) {
			shape.y2 = roundNumber(shape.y2)
		}

		if (shape.height) {
			shape.height = roundNumber(shape.height)
		}

		if (shape.r) {
			shape.r = roundNumber(shape.r)
		}

		if (shape.cx) {
			shape.cx = roundNumber(shape.cx)
		}

		if (shape.cy) {
			shape.cy = roundNumber(shape.cy)
		}

		if (shape.fillOpacity) {
			shape.fillOpacity = roundNumber(shape.fillOpacity)
		}

		if (shape.strokeOpacity) {
			shape.strokeOpacity = roundNumber(shape.strokeOpacity)
		}

		if (shape.attachmentPoints) {
			const attachmentPoints = shape.attachmentPoints
			for (let j = 0; j < attachmentPoints.length; j++) {
				const attachmentPoint = attachmentPoints[j]
				attachmentPoint.setX(roundNumber(attachmentPoint.getX()))
				attachmentPoint.setY(roundNumber(attachmentPoint.getY()))
			}
		}

		if (shape.pointToAttach) {
			const pointToAttach = shape.pointToAttach
			pointToAttach.setX(roundNumber(pointToAttach.getX()))
			pointToAttach.setY(roundNumber(pointToAttach.getY()))
		}

		if (shape.translate) {
			const translate = shape.translate
			translate[0] = roundNumber(translate[0])
			translate[1] = roundNumber(translate[1])
		}
	}

	return shapes
}
