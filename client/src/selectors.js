export const getLeftSidebarIsVisible = state => {
  return state.sidebar.leftSidebarIsVisible
}
export const getRightSidebarIsVisible = state => {
  return state.sidebar.rightSidebarIsVisible
}
export const getHelpIsVisible = state => {
  return state.help.helpIsVisible
}
export const getSelectedTheme = state => {
  return state.theme.selectedTheme
}
export const getThemeDropdownIsOpen = state => {
  return state.theme.themeDropdownIsOpen
}
export const getPicture = state => {
  return state.picture.picture
}
export const getLoadingPicture = state => {
  return state.picture.loadingPicture
}
export const getErrorMessage = state => {
  return state.error.errorMessage
}
export const getCreatePictureButtonColor = state => {
  return state.control.createPictureButtonColor
}
export const getMaxNumberOfShapesInPicture = state => {
  return state.picture.maxNumberOfShapesInPicture
}
