import React from 'react'

const SportsNewsButton = ({ setIsSportsClicked}) => {
    const clicked = () => {
        setIsSportsClicked(prevClick => !prevClick)
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