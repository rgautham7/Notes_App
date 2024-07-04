import React, { useContext } from 'react'
import { noteContext } from '../context/NoteContext';

const Note = (props) => {
    const { deleteNote } = useContext(noteContext);

  return (
        <div className="note">
            <div className="text">{props.text}</div>
            <div className="footer">
              <div className="date">{props.date}</div>
              <button className="btn" onClick={() => deleteNote(props.id)}>
                <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
  )
}

export default Note;