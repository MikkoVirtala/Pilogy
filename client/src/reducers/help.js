const initialState = {
  helpIsVisible: false
}

const help = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_HELP_VISIBILITY':
      return {
        ...state,
        helpIsVisible: !state.helpIsVisible
      }
    default:
      return state
  }
}

export default help
