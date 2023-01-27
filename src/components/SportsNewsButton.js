import React from 'react'

const SportsNewsButton = ({ changedSportsClick}) => {
    const clicked = () => {
        changedSportsClick()
    }
  return (
    <div>
        <button
            onClick={clicked}
            className='sports-btn'
            >Sports
        </button>
    </div>
  )
}

export default SportsNewsButton