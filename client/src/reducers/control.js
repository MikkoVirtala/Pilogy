const initialState = {
  createPictureButtonColor: ''
}

const control = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CREATE_PICTURE_BUTTON_COLOR':
      return {
        ...state,
        createPictureButtonColor: action.color
      }
    default:
      return state
  }
}

export default control
