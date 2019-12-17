export function setPicture(picture) {
  return { type: 'SET_PICTURE', picture }
}
export function setLoadingPicture(loading) {
  return { type: 'SET_LOADING_PICTURE', loading }
}
export function setMaxNumberOfShapesInPicture(maxNumberOfShapesInPicture) {
  return {
    type: 'SET_MAX_NUMBER_OF_SHAPES_IN_PICTURE',
    maxNumberOfShapesInPicture
  }
}
