import { SET_EPISODE_CURRENT_PAGE, SET_EPISODE_PAGES, SET_EPISODE_QUERY } from "./types"

const initialState = {
  episodePages: null,
  currentEpisodePage: 1,
  currentEpisodeQuery: '',
}

const episodeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EPISODE_PAGES:
      return { ...state, episodePages: action.payload }
    case SET_EPISODE_CURRENT_PAGE:
      return { ...state, currentEpisodePage: action.payload }
    case SET_EPISODE_QUERY:
      return { ...state, currentEpisodeQuery: action.payload }
    default:
      return state;
  }
}

export default episodeReducer
