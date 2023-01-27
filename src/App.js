
import './App.css';
import {useEffect, useState} from 'react'
import Header from './components/Header';
import TechNews from './components/TechNews';
import TopNews from './components/TopNews';
import SportsNews from './pages/SportsNews';

function App() {
  const apiKey = '70cfd30c73a14774addbd444b2783dc8'
  const [topNews, setTopNews] = useState([])
  const [techNews, setTechNews] = useState([])
  const [sportsNews, setSportsNews] = useState([])
  const [isClicked, setIsClicked] = useState(false)
  const [isTopNewsClicked, setIsTopNewsClicked] = useState(false)
  const [isSportsClicked, setIsSportsClicked] = useState(false)

  // Top News
  useEffect(() => {
    getNews()
  },[])

  const getNews = async () => {
    try{
      const api = await fetch(`https://newsapi.org/v2/top-headlines?country=us&sortBy=popular&pageSize=10&apiKey=${apiKey}`)
      const data = await api.json()
      setTopNews(data.articles)
    }catch(err){
      console.log(err)
    }
  }

  // tech news
  useEffect(() => {
    getTechNews()
  },[])

  const getTechNews = async () => {
    try{
      const api = await fetch(`https://newsapi.org/v2/everything?q=apple+microsoft+tesla+chatgpt&sortBy=popularity&pageSize=10&apiKey=${apiKey}`)
      const data = await api.json()
      setTechNews(data.articles)
    }catch(err){
      console.log(err)
    }
  }

  // sports news
  useEffect(() => {
    getSportsNews()
  },[])

  const getSportsNews = async () => {
    try{
      const api = await fetch(`https://newsapi.org/v2/everything?q=nfl+nhl+mlb+nba&sortBy=popularity&pageSize=10&apiKey=${apiKey}`)
      const data = await api.json()
      setSportsNews(data.articles)
      console.log(sportsNews)
    }catch(err){
      console.log(err)
    }
  }
  return (
  <>
    <Header 
        isClicked={isClicked}
        setIsClicked={setIsClicked}
        isTopNewsClicked={isTopNewsClicked}
        setIsTopNewsClicked={setIsTopNewsClicked}
        isSportsClicked={isSportsClicked}
        setIsSportsClicked={setIsSportsClicked}
    />
    <div>{isClicked ? <TechNews techNews={techNews}  /> : ''}</div>
    <div>{isTopNewsClicked ? <TopNews topNews={topNews}  /> : ''}</div>
    <div>{isSportsClicked ? <SportsNews sportsNews={sportsNews} /> : ''}</div>
  </>
  );
}

export default App;
