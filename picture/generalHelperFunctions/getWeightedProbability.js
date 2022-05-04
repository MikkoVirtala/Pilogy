module.exports.getWeightedProbability = (target, numberOfTrials) => {
	let nearestToTarget = Math.random()
	for (let i = 0; i < numberOfTrials; i++) {
		const randomNumber = Math.random()
		if (Math.abs(target - randomNumber) < Math.abs(target - nearestToTarget)) {
			nearestToTarget = randomNumber
		}
	}
	return nearestToTarget
}
