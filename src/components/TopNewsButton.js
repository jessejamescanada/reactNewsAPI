import React from 'react'

const TopNewsButton = ({setIsTopNewsClicked}) => {

    const clicked = () => {
        setIsTopNewsClicked(prevClick => !prevClick)
    }
  return (
    <div>
        <button
             onClick={clicked}
             className='top-btn'
             >Top News
        </button>
    </div>
  )
}

export default TopNewsButton