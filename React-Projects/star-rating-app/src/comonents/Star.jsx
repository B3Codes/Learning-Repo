import React from 'react'
import '../index.css';

function Star({filled, onClick, onMouseEnter, onMouseLeave}) {
  return (
    <span
      className='star'
      onClick={onClick}
      onMouseEnter = {onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ cursor: 'pointer', color: filled ? 'gold' : 'gray' }}
    >★</span>
  )
}

export default Star;