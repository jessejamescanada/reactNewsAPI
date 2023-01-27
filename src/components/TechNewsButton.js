import React from 'react'

const TechNewsButton = ({ changedTechClick}) => {
    const clicked = () => {
        changedTechClick()
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

