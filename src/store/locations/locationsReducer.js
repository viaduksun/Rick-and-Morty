import { SET_LOCATION_CURRENT_PAGE, SET_LOCATION_PAGES, SET_LOCATION_QUERY } from "./types"

const initialState = {
  locationPages: null,
  currentLocationPage: 1,
  currentLocationQuery: '',
}

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCATION_PAGES:
      return { ...state, locationPages: action.payload }
    case SET_LOCATION_CURRENT_PAGE:
      return { ...state, currentLocationPage: action.payload }
    case SET_LOCATION_QUERY:
      return { ...state, currentLocationQuery: action.payload }
    default:
      return state;
  }
}

export default locationReducer
