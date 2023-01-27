import React from 'react'

const TopNews = ({topNews}) => {
  return (
    <div className="App">
    <div className="news-article-container">
    {topNews.map((item) => {
      return (
      <a href={item.url} className="img-info-container">
        <div className="title-container">
            <h2 className="title">{item.title.length > 70 ? `${item.title.substring(0, 70)}...` : item.title}</h2>
        </div>
        <div className="img-container">
            <img src={item.urlToImage} alt={item.publishedAt} className='news-image'/>
        </div>
        <div className="news-description">
          <p>{item.description.length > 200 ? `${item.description.substring(0, 200)}...` : item.description}</p>
        </div>
      </a>
    )
})}
</div>
</div>
  )
}

export default TopNews