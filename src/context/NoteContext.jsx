import { createContext, useEffect, useState } from "react";
import { notes as noteData } from "../data/notes";

export const noteContext = createContext(null);

export default function ContextProvider(props) {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        setNotes(noteData)
    }, []);

    const addNote = (newNote) => {
        setNotes((prev) => [newNote, ...prev]);
    }

    const deleteNote = (idx) => {
        setNotes((prev) => prev.filter((note, i) => i !== idx));
    }

    const val = {
        notes,
        addNote,
        deleteNote,
    };
    return (
        <noteContext.Provider value={val}>{props.children}</noteContext.Provider>
    );
}