const {
  getSequence
} = require('../../createHierarchicalSequence/basicSequences/basicSequencesForCreatingStyle')
const {
  createHierarchicalSequence
} = require('../../createHierarchicalSequence/createHierarchicalSequence')
const {
  createPatternOfNumbersInRange
} = require('./createPatternOfNumbersInRange')
const { getRandomElementInArray } = require('../../getRandomElementInArray')
const {
  getRandomIntegerInRangeExcludeMax
} = require('../../getRandomIntegerInRangeExcludeMax')

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

  getColor() {
    return this.hslToHex(
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

  hslToHex(h, s, l) {
    s /= 100
    l /= 100

    let c = (1 - Math.abs(2 * l - 1)) * s,
      x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
      m = l - c / 2,
      r = 0,
      g = 0,
      b = 0

    if (0 <= h && h < 60) {
      r = c
      g = x
      b = 0
    } else if (60 <= h && h < 120) {
      r = x
      g = c
      b = 0
    } else if (120 <= h && h < 180) {
      r = 0
      g = c
      b = x
    } else if (180 <= h && h < 240) {
      r = 0
      g = x
      b = c
    } else if (240 <= h && h < 300) {
      r = x
      g = 0
      b = c
    } else if (300 <= h && h < 360) {
      r = c
      g = 0
      b = x
    }
    // Having obtained RGB, convert channels to hex
    r = Math.round((r + m) * 255).toString(16)
    g = Math.round((g + m) * 255).toString(16)
    b = Math.round((b + m) * 255).toString(16)

    // Prepend 0s, if necessary
    if (r.length == 1) r = '0' + r
    if (g.length == 1) g = '0' + g
    if (b.length == 1) b = '0' + b

    return '#' + r + g + b
  }
}

module.exports.Style = Style
