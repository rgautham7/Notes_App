import { useContext, useEffect, useState, useRef } from 'react'
import { noteContext } from './context/NoteContext'
import './App.css'

import Sidebar from './components/Sidebar'
import Note from './components/Note'
import NewNote from './components/NewNote'


function App() {
  const [showCard, setShowCard] = useState(false);
  const [newText, setNewText] = useState("");

  const {notes, addNote} = useContext(noteContext);

  const noteContainerRef = useRef(null);
  const footerRef = useRef(null);

  const renderNotes = () => {
    return notes?.map((note, idx) => <Note text={note.text} date={note.date} id={idx}/>)
  }

  const handleAdd = () => {
    addNote({
      text: newText,
      date: new Date().toLocaleString()
    })
    setNewText("");
    setShowCard(false);
  }

  useEffect(() => {
    const handleResize = () => {
    const noteContainer = noteContainerRef.current;
    const footer = footerRef.current;
    
    if(noteContainer && footer) {
      if(noteContainer.scrollHeight < window.innerHeight) {
        footer.classList.add('footer-wrapper');
      } else {
        footer.classList.remove('footer-wrapper');
      }
    }
  };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  },[notes]);

  return (
    <div className="app">
      <Sidebar showCard={showCard} setShowCard={setShowCard} />
      <div className="content">
        <h1>Notes</h1>
        
        <div className="notes-container" ref={noteContainerRef}>
            {showCard && <NewNote newText={newText} setNewText={setNewText} handleAdd={handleAdd} />}
          
            {renderNotes()}
        </div>
        <div ref={footerRef}>
        <footer>
          <p>Copyrights reserved.&copy; Created by <a href="https://github.com/rgautham7">Gautham R</a>.</p>
        </footer>
        </div>
      </div>
    </div>
  )
}

export default App
