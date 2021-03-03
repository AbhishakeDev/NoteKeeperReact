import React, { useState, useContext, Fragment } from 'react';
import NoteContext from '../context/noteContext';
import { Route, Redirect } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

const Form = () => {
    const noteContext = useContext(NoteContext);
    const { addNote, modify, isSubmitted } = noteContext;
    const [NoteItem, setNoteItem] = useState({
        id: null,
        subject: '',
        message: '',
        date: ''
    })

    const { subject, message } = NoteItem;

    const onChange = e => (
        setNoteItem({
            ...NoteItem,
            id: uuid(),
            [e.target.name]: e.target.value,
            date: new Date().toLocaleString()
        })
    )
    const onSubmit = (e) => {
        e.preventDefault();
        if (NoteItem.subject !== '' && NoteItem.message !== '') {
            addNote(NoteItem)
            modify(true)
            // console.log(NoteItem);
            setNoteItem({
                id: null,
                subject: '',
                message: '',
                date: ''
            })
        }
        else {
            alert('Please enter something');
        }

    }

    return (
        <Fragment>
            {isSubmitted ? <Route><Redirect to='/' /></Route>
                :
                <div className="add-notes">
                    <form onSubmit={onSubmit} className="note-form">
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input name="subject" onChange={onChange} value={subject} type="text" />
                            <label>Note</label>
                            <textarea name="message" onChange={onChange} value={message}></textarea>
                        </div>
                        <input type="submit" className="submit-btn" value="Add Note" />
                    </form>
                </div>
            }</Fragment>

    )
}

export default Form
