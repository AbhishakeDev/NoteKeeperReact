import React, { useReducer } from 'react';
import { ADD_NOTE, DELETE_NOTE, UPDATE_NOTE, MODIFY } from './types';

import NoteContext from './noteContext';
import NoteReducer from './noteReducer';

const NoteState = props => {
    const initialState = {
        notes: [],
        isSubmitted: false
    }

    const [state, dispatch] = useReducer(NoteReducer, initialState);

    //Add note
    const addNote = (data) => {
        dispatch({
            type: ADD_NOTE,
            payload: data
        })
    }
    //Delete Note
    const deleteNote = (id) => {
        dispatch({
            type: DELETE_NOTE,
            payload: id
        })
    }
    //Update Note
    const updateNote = (data) => {
        dispatch({
            type: UPDATE_NOTE,
            payload: data
        })
    }
    //Modify Submission
    const modify = (flag) => {
        dispatch({
            type: MODIFY,
            payload: flag
        })
    }
    return <NoteContext.Provider
        value={{
            notes: state.notes,
            isSubmitted: state.isSubmitted,
            addNote,
            deleteNote,
            updateNote,
            modify
        }}>
        {props.children}
    </NoteContext.Provider>
}


export default NoteState;