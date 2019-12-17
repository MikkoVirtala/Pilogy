const initialState = {
  errorMessage: ''
}

const error = (state = initialState, action) => {
  //   console.log('action: ', action)
  switch (action.type) {
    case 'SET_ERROR_MESSAGE':
      return {
        ...state,
        errorMessage: action.errorMessage
      }
    default:
      return state
  }
}

export default error
