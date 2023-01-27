import React from 'react'
import '../App.css';
import TechNewsButton from './TechNewsButton';
import TopNewsButton from './TopNewsButton';
import SportsNewsButton from './SportsNewsButton';
import { useState } from 'react';

const Header = ({isClicked, setIsClicked, isTopNewsClicked, setIsTopNewsClicked, isSportsClicked, setIsSportsClicked}) => {
    const [activeIndex, setActiveIndex] = useState(0)
  
    const changedSportsClick = () => {
        setIsSportsClicked(prevClick => !prevClick)
        setIsClicked(false)
        setIsTopNewsClicked(false)
    }

    const changedTechClick =() => {
        setIsClicked(prevClick => !prevClick)
        setIsSportsClicked(false)
        setIsTopNewsClicked(false)
    }

    const changedTopClick = () => {
        setIsTopNewsClicked(prevClick => !prevClick)
        setIsClicked(false)
        setIsSportsClicked(false)
    }
  
    return (
    <header>
        <div className="header-container">
            <div className="header-items-container">
                <h3>Menu</h3>
                <h1>The News</h1>
                <div className="options-container">
                    <ul className='header-ul'>
                        <li>Weather</li>
                        <li>Sports</li>
                    </ul>
                </div>
            </div>
            <div className="news-btns">
            <TopNewsButton 
                changedTopClick={changedTopClick}
                />
            <TechNewsButton  
                changedTechClick={changedTechClick}
                />
            <SportsNewsButton  
                changedSportsClick={changedSportsClick}
                />
            </div>
        </div>
    </header>
  )
}

export default Header