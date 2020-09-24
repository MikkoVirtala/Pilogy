const initialState = {
	selectedTheme: 'whiteTheme',
	themeDropdownIsOpen: false,
}

const theme = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_SELECTED_THEME':
			return {
				...state,
				selectedTheme: action.theme,
			}
		case 'TOGGLE_THEME_DROPDOWN_IS_OPEN':
			return {
				...state,
				themeDropdownIsOpen: !state.themeDropdownIsOpen,
			}
		default:
			return state
	}
}

export default theme
