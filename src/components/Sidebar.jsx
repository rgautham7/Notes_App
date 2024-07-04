import React from 'react'

const Sidebar = ( { showCard, setShowCard } ) => {
  return (
    <div className="sidebar">
        <h2>NotePal</h2>
        <button className='btn' onClick={() => setShowCard(!showCard)}><i class="fa-solid fa-plus"></i></button>
    </div>
  )
}

export default Sidebar;