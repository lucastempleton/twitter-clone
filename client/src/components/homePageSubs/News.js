import {useState, useEffect} from 'react';
export default function News(){
    const [news, setNews] = useState([]);
    useEffect(()=>{
        fetch('https://newsapi.org/v2/top-headlines?country=us&pageSize=5&apiKey=5d75f9b824f0451086dc9976884aec27')
        .then(r=>r.json())
        .then(log=>setNews(log.articles))}
        ,[])
    return(
        <div className='articles'>
            <h2>What's happening</h2>
            {news.map((a, index)=>{
                return(
                    <div key={index} className='article'>  
                        <a href={a.url}>{a.title}</a>
                        <img src={a.urlToImage}/>
                        
                    </div>
                )
            })}
        </div>
    )
}