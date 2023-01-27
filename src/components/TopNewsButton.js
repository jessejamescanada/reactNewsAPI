import React from 'react'

const TopNewsButton = ({changedTopClick}) => {

    const clicked = () => {
        changedTopClick()
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