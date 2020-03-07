const initialState = {
	picture: null,
	loadingPicture: false,
	maxNumberOfShapesInPicture: 10000
}

const picture = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_PICTURE':
			return {
				...state,
				picture: action.picture
			}
		case 'SET_LOADING_PICTURE':
			return {
				...state,
				loadingPicture: action.loading
			}
		case 'SET_MAX_NUMBER_OF_SHAPES_IN_PICTURE':
			return {
				...state,
				maxNumberOfShapesInPicture: action.maxNumberOfShapesInPicture
			}
		default:
			return state
	}
}

export default picture
