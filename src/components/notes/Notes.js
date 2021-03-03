import React, { useEffect, useContext } from 'react'
import Note from './Note';
import NoteContext from '../context/noteContext';

const Notes = () => {
    const noteContext = useContext(NoteContext);
    const { notes, modify } = noteContext;

    useEffect(() => {
        modify(false);
        //eslint-disable-next-line
    }, [])
    return (
        <div className="notes">
            <div className="notes-wrapper">
                {notes !== [] && notes.map(note => <Note key={note.id} note={note} />)}
            </div>
        </div>
    )
}

export default Notes
