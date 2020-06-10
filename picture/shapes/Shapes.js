class Shapes {
	constructor() {
		this.shapesInLevels = []
		this.length = 0
	}
	addLevel(arrayOfShapes) {
		this.shapesInLevels.push(arrayOfShapes)
		this.length += arrayOfShapes.length
	}
	getLatestLevel() {
		return this.shapesInLevels.length > 0
			? this.shapesInLevels[this.shapesInLevels.length - 1]
			: []
	}
	getLength() {
		return this.length
	}
	flat() {
		return [].concat(...this.shapesInLevels)
	}
}

module.exports.Shapes = Shapes
