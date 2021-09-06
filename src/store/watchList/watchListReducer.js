import { ADD_NOTE, DELETE_NOTE, SELECT_NOTE, SET_NOTES } from "./types";

const initialState = {
  notes: [],
}
const watchListReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_NOTES:
      return { ...state, notes: action.payload }
    case ADD_NOTE:
      localStorage.setItem('notes', JSON.stringify([...state.notes, action.payload]));
      return { ...state, notes: [...state.notes, action.payload] }
    case DELETE_NOTE:
      const newNotesArr = state.notes.filter((note) => note.id !== action.payload)
      localStorage.setItem('notes', JSON.stringify(newNotesArr));
      return { ...state, notes: newNotesArr }
    case SELECT_NOTE:
      const newNotesArrSelected = state.notes.map((note) => {
        if (note.id === action.payload) {
          return { ...note, completed: !note.completed }
        }
        return note;
      })
      localStorage.setItem('notes', JSON.stringify(newNotesArrSelected));
      return { ...state, notes: newNotesArrSelected }
    default:
      return state;
  }
}
export default watchListReduser;