const {
	getSequence,
} = require('../../createHierarchicalSequence/basicSequences/basicSequencesForCreatingStyle')
const {
	createHierarchicalSequence,
} = require('../../createHierarchicalSequence/createHierarchicalSequence')
const {
	createPatternOfNumbersInRange,
} = require('./createPatternOfNumbersInRange')
const { getRandomElementInArray } = require('../../getRandomElementInArray')
const {
	getRandomIntegerInRangeExcludeMax,
} = require('../../getRandomIntegerInRangeExcludeMax')
const {
	createRotationStyleSelection,
} = require('./createRotationStyleSelection/createRotationStyleSelection')
const { hslToHex } = require('../../hslToHex')

class Style {
	constructor() {
		this.hueSelection = createPatternOfNumbersInRange(
			0,
			360,
			createHierarchicalSequence(0, getSequence)
		)
		this.saturationSelection = createPatternOfNumbersInRange(
			0,
			100,
			createHierarchicalSequence(0, getSequence)
		)
		this.lightnessSelection = createPatternOfNumbersInRange(
			0,
			100,
			createHierarchicalSequence(0, getSequence)
		)
		this.alphaSelection = createPatternOfNumbersInRange(
			Math.random() * 0.9,
			1.0,
			createHierarchicalSequence(0, getSequence)
		)
		this.middleLengthSelection = createPatternOfNumbersInRange(
			0,
			1000,
			createHierarchicalSequence(1, getSequence)
		)
		this.createShortAndLongLengthSelections()

		this.rotationStyleSelection = createRotationStyleSelection()

		this.createSelectionOfConstantsForRotationFunction()
	}

	createShortAndLongLengthSelections() {
		this.shortLengthSelection = []
		this.longLengthSelection = []
		const coefficient = getRandomIntegerInRangeExcludeMax(2, 10)
		for (let i = 0; i < this.middleLengthSelection.length; i++) {
			this.shortLengthSelection.push(
				this.middleLengthSelection[i] / coefficient
			)
			this.longLengthSelection.push(this.middleLengthSelection[i] * coefficient)
		}
	}

	createSelectionOfConstantsForRotationFunction() {
		this.selectionOfConstantsForRotationFunction = []
		const numberOfConstantsInSelection = getRandomIntegerInRangeExcludeMax(
			1,
			10
		)
		for (let i = 0; i < numberOfConstantsInSelection; i++) {
			this.selectionOfConstantsForRotationFunction.push(
				getRandomIntegerInRangeExcludeMax(1, 360)
			)
		}
	}

	getColor() {
		return hslToHex(
			Math.round(getRandomElementInArray(this.hueSelection)),
			Math.round(getRandomElementInArray(this.saturationSelection)),
			Math.round(getRandomElementInArray(this.lightnessSelection))
		)
	}

	getOpacity() {
		return getRandomElementInArray(this.alphaSelection)
	}

	getLength(weight) {
		switch (weight) {
			case 'short':
				return getRandomElementInArray(this.shortLengthSelection)
			case 'middle':
				return getRandomElementInArray(this.middleLengthSelection)
			case 'long':
				return getRandomElementInArray(this.longLengthSelection)
			default:
				return getRandomElementInArray(this.middleLengthSelection)
		}
	}

	getRotationStyle() {
		return getRandomElementInArray(this.rotationStyleSelection)
	}

	getConstantForRotationFunction() {
		return getRandomElementInArray(this.selectionOfConstantsForRotationFunction)
	}
}

module.exports.Style = Style
