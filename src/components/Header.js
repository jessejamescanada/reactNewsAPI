import React from 'react'
import '../App.css';
import TechNewsButton from './TechNewsButton';
import TopNewsButton from './TopNewsButton';
import SportsNewsButton from './SportsNewsButton';

const Header = ({isClicked, setIsClicked, isTopNewsClicked, setIsTopNewsClicked, isSportsClicked, setIsSportsClicked}) => {
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
            <TopNewsButton isTopNewsClicked={isTopNewsClicked} setIsTopNewsClicked={setIsTopNewsClicked}/>
            <TechNewsButton  isClicked={isClicked} setIsClicked={setIsClicked}/>
            <SportsNewsButton isSportsClicked={isSportsClicked} setIsSportsClicked={setIsSportsClicked}/>
            </div>
        </div>
    </header>
  )
}

export default Header