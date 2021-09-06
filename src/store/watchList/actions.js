import { ADD_NOTE, DELETE_NOTE, SELECT_NOTE, SET_NOTES } from "./types";

export const setInitialNotes = (notes) => ({
  type: SET_NOTES,
  payload: notes,
})
export const addNote = (note) => ({
  type: ADD_NOTE,
  payload: note,
})
export const deleteNoteAction = (id) => ({
  type: DELETE_NOTE,
  payload: id,
})
export const selectNoteAction = (id) => ({
  type: SELECT_NOTE,
  payload: id,
})