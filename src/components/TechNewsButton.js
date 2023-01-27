import React from 'react'

const TechNewsButton = ({ setIsClicked}) => {
    const clicked = () => {
        setIsClicked(prevCheck => !prevCheck)
    }
    return(
        <div>
            <button 
                onClick={clicked}
                className='tech-btn'
                >Tech News
            </button>
        </div>
    )
}

export default TechNewsButton

