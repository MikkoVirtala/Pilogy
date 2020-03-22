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
  if (!document.getElementById('picture')) {
    return
  }
  let picture = document.getElementById('picture')
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

  //////////////////////////////////////////////////////////////
  //   const clientX = e.clientX
  //   const clientY = e.clientY
  //   const differenceX = window.innerWidth / 2.0 - clientX
  //   const differenceY = window.innerHeight / 2.0 - clientY

  //   console.log('differenceX: ', differenceX)
  //   console.log('differenceY: ', differenceY)

  //   const pictureLeft = parseFloat(pictureStyle.getPropertyValue('left'))
  //   const pictureTop = parseFloat(pictureStyle.getPropertyValue('top'))
  //   console.log('pictureLeft: ', pictureLeft)
  //   console.log('pictureTop: ', pictureTop)
  //   const newLeft = pictureLeft + differenceX + 'px'
  //   const newTop = pictureTop + differenceY + 'px'
  //   console.log('newLeft: ', newLeft)
  //   console.log('newTop: ', newTop)
  //   picture.style.left = newLeft
  //   picture.style.top = newTop
}
