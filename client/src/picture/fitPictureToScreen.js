const fitPictureToScreen = () => {
	if (
		document.getElementById('svgPicture') &&
		document.getElementById('picture')
	) {
		const controlHeight = 60
		const margin = 8
		const picture = document.getElementById('picture')
		const width = parseInt(window.getComputedStyle(picture).width, 10)
		const height = parseInt(window.getComputedStyle(picture).height, 10)
		const ratio = width / height
		const availableWidth = window.innerWidth - margin * 2
		const availableHeight = window.innerHeight - controlHeight - margin * 2
		let newWidth = ''
		let newHeight = ''

		if (availableWidth < availableHeight) {
			newWidth = availableWidth
			newHeight = newWidth / ratio
		} else {
			newHeight = availableHeight
			newWidth = newHeight * ratio
		}

		picture.style.width = `${newWidth}px`
		picture.style.height = `${newHeight}px`
		picture.style.transform = 'scale(1)'
		picture.style.left = `${(availableWidth - newWidth) / 2 + margin}px`
		picture.style.top = `${(availableHeight - newHeight) / 2 + margin}px`
		document.getElementById('svgPicture').setAttribute('width', `${newWidth}px`)
		document
			.getElementById('svgPicture')
			.setAttribute('height', `${newHeight}px`)
	}
	resetTransformElement()
}

const resetTransformElement = () => {
	const transformElement = document.getElementsByClassName(
		'react-transform-element'
	)
	if (transformElement && transformElement[0]) {
		transformElement[0].style.transform = 'translate(0px, 0px) scale(1)'
	}
}

export default fitPictureToScreen
