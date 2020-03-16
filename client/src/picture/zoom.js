export function addZoom(element) {
	if (element) {
		element.addEventListener('wheel', zoomPicture)
	}
}

export function removeZoom(element) {
	if (element) {
		element.removeEventListener('wheel', zoomPicture)
	}
}

function zoomPicture(e) {
	let picture = document.getElementById('picture')
	// console.log('1x: ', e.offsetX)
	// console.log('1y: ', e.offsetY)
	console.log('1mousePositionXInPicture: ', picture.offsetX)
	console.log('1mousePositionYInPicture: ', picture.offsetY)
	let pictureStyle = getComputedStyle(picture)
	let transform = pictureStyle.getPropertyValue('transform')
	let transformAsArray = transform.replace('matrix(', '')
	transformAsArray = transformAsArray.replace(')', '')
	transformAsArray = transformAsArray.split(',')
	let scaleX = parseFloat(transformAsArray[0])
	let updatedScale = scaleX * (1 - e.deltaY * 0.00101)
	if (updatedScale > 0) {
		picture.style.transform = 'scale(' + updatedScale + ')'
	}

	// const picturePositionX = picture.style.left
	// const picturePositionY = picture.style.top

	// console.log('picturePositionX: ', picturePositionX)
	// console.log('picturePositionY: ', picturePositionY)

	const mousePositionXInPicture = picture.offsetX
	const mousePositionYInPicture = picture.offsetY

	console.log('2mousePositionXInPicture: ', mousePositionXInPicture)
	console.log('2mousePositionYInPicture: ', mousePositionYInPicture)

	// const centerX = window.innerWidth / 2.0
	// const centerY = window.innerHeight / 2.0
	// console.log('centerX: ', centerX)
	// console.log('centerY: ', centerY)

	// const clientX = e.clientX
	// const clientY = e.clientY

	// console.log('clientX: ', clientX)
	// console.log('clientY: ', clientY)
	// const differenceX = window.innerWidth / 2.0 - e.clientX
	// const differenceY = window.innerHeight / 2.0 - e.clientY

	// console.log('differenceX: ', differenceX)
	// console.log('differenceY: ', differenceY)

	// const pictureWidth = picture.style.width
	// const pictureHeight = picture.style.height

	// console.log('pictureWidth: ', pictureWidth)
	// console.log('pictureHeight: ', pictureHeight)

	// const pictureX = picture.offsetLeft
	// const pictureY = picture.offsetTop

	// console.log('2pictureX: ', document.getElementById('picture').offsetLeft)
	// console.log('2pictureY: ', document.getElementById('picture').offsetTop)

	// const x = e.offsetX
	// const y = e.offsetY

	// console.log('2x: ', e.offsetX)
	// console.log('2y: ', e.offsetY)

	// console.log('zoom')

	// picture.style.left = 10 + 'px'
}
