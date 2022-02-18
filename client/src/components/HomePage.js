import "./css/homepage.css"
import { useState, useEffect } from 'react'
import Header from "./homePageSubs/Header.js"
import NavBar from "./homePageSubs/NavBar.js"
import Tweet from './homePageSubs/Tweet.js'
import News from './homePageSubs/News.js'
import Tweets from './homePageSubs/Tweets.js'
import Profile from './homePageSubs/Profile.js'

export default function HomePage(){
    const user = {id: 1, avatar: null, name: 'Lucas Templeton', username: '@testing123'}
    const [tweets, setTweets] = useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/api/posts')
        .then(r=>r.json())
        .then(log =>{
            setTweets(log.reverse())
        })
    },[])
    function addTweet(newTweet){
        setTweets([newTweet, ...tweets])
    }
    return(
        <div className="container">
            <div className="navbar"><NavBar /></div>
            <div className="profile"><Profile user={user} /></div>
            <div className="tweets"><Tweets tweets={tweets} user={user} /></div>
            <div className="tweet"><Tweet addTweet={addTweet} user={user}/></div>
            <div className="news"><News /></div>
            <div className="follow"><p>suggest follow</p></div>
            <div className="messages"><p>messages</p></div>
            <div className="search"><Header /></div>
        </div>
    )
}