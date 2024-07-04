import React from 'react'

const NewNote = ({newText, setNewText, handleAdd}) => {
  return (
<div className="new-note note">
  <textarea 
    value={newText} 
    onChange={(e) => setNewText(e.target.value)} 
    cols={50} 
    rows={20}>
  </textarea>
  <button className="btn" onClick={handleAdd}>
    <i class="fa-solid fa-check"></i>
  </button>
</div>
  )
}

export default NewNote