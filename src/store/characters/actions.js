import getCharacter from "../../api/getCharacter";
import { SET_CHARACTER_PAGES, SET_CURRENT_FILTER_CHARACTERS, SET_CURRENT_PAGE, SET_MODAL_CLOSE, SET_MODAL_OPEN } from "./types";

export const setCharacterPages = (pages) => ({
  type: SET_CHARACTER_PAGES,
  payload: pages
})
export const setCurrentPageAction = (page) => ({
  type: SET_CURRENT_PAGE,
  payload: page
})
export const setModalClose = () => ({
  type: SET_MODAL_CLOSE,
})
export const setCurrentFilterAction = (currentQuery) => ({
  type: SET_CURRENT_FILTER_CHARACTERS,
  payload: currentQuery
})
export const setModalOpen = (id) => (dispatch) => {
  getCharacter(id).then((data) => {
    dispatch({
      type: SET_MODAL_OPEN,
      payload: data
    })
  })
}