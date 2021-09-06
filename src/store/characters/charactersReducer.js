import { SET_CHARACTER_PAGES, SET_CURRENT_FILTER_CHARACTERS, SET_CURRENT_PAGE, SET_MODAL_CLOSE, SET_MODAL_OPEN } from "./types"

const initialState = {
  pages: null,
  currentPage: 1,
  currentCard: {},
  isModalOpen: false,
  currentFilterQuery: ''
}

const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHARACTER_PAGES:
      return { ...state, pages: action.payload }
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload }
    case SET_MODAL_OPEN:
      return { ...state, currentCard: action.payload, isModalOpen: true }
    case SET_MODAL_CLOSE:
      return { ...state, isModalOpen: false }
    case SET_CURRENT_FILTER_CHARACTERS:
      return { ...state, currentFilterQuery: action.payload, }
    default:
      return state;
  }
}

export default charactersReducer
