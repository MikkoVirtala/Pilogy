const fitPictureToScreen = () => {
  const picture = document.getElementById('picture')
  const width = parseInt(window.getComputedStyle(picture).width, 10)
  const height = parseInt(window.getComputedStyle(picture).height, 10)
  const ratio = width / height
  const availableWidth = window.innerWidth
  const availableHeight = window.innerHeight - 60 - 16 // control height, margin * 2
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
  picture.style.left = `${(window.innerWidth - newWidth) / 2}px`
  picture.style.top = `${(availableHeight - newHeight) / 2 + 8}px` // margin * 1
  document.getElementById('svgPicture').setAttribute('width', `${newWidth}px`)
  document.getElementById('svgPicture').setAttribute('height', `${newHeight}px`)
}

export default fitPictureToScreen
