import { ADD_NOTE, DELETE_NOTE, UPDATE_NOTE, MODIFY } from './types';


export default (state, action) => {
    switch (action.type) {
        case ADD_NOTE:
            return {
                ...state,
                notes: [...state.notes, action.payload]
            }
        case DELETE_NOTE:
            return {
                ...state,
                notes: state.notes.filter(note => note.id !== action.payload)
            }
        case UPDATE_NOTE:
            return {
                ...state,
                notes: state.notes.map(note => note.id === action.payload.id ? action.payload : note)
            }
        case MODIFY:
            return {
                ...state,
                isSubmitted: action.payload
            }
        default:
            return state;
    }
}