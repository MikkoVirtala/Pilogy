module.exports.normalizeDegreesToBetween0And360 = degrees => {
	while (degrees >= 360) {
		degrees -= 360
	}
	while (degrees < 0) {
		degrees += 360
	}
	return degrees
}
