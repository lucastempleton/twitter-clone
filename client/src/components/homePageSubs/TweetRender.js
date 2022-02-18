import { useState, useEffect } from 'react'
import MentionPopup from './MentionPopup.js'
export default function TweetRender({tweet, user}){
    const [t, setT] = useState(tweet)
    const [liked, setLiked] = useState(false)
    const [bookmarked, setBookmarked] = useState(false)
    const [mentionPop, setMentionPop] = useState(false)
    useEffect(()=>{
        fetch('http://localhost:3000/api/find-like',{
            method: 'PATCH',
            headers: {'content-type' : 'application/json'},
            body: JSON.stringify({post_id: t.id, user_id: user.id})
        }).then(r => r.json())
        .then(log => {
            if ( log.success ){
                setLiked(true)
            }
        })
        fetch('http://localhost:3000/api/find-bookmark',{
            method: 'PATCH',
            headers: {'content-type' : 'application/json'},
            body: JSON.stringify({post_id: t.id, user_id: user.id})
        }).then(r => r.json())
        .then(log => {
            if ( log.success ){
                setBookmarked(true)
            }
        })
    },[])
    function changeLike(){
        if(liked === false){
            setT({...t, ['like_count']: ++t.like_count})
            setLiked(!liked)
            fetch('http://localhost:3000/api/add-like',{
                method: 'PATCH',
                headers: {'content-type' : 'application/json'},
                body: JSON.stringify({like_count: t.like_count, user_id: user.id, post_id: t.id})
            }).then(r=>r.json())
            .then(log=>console.log(log))
        }else{
            setT({...t, ['like_count']: --t.like_count})
            setLiked(!liked)
            fetch('http://localhost:3000/api/un-like',{
                method: 'PATCH',
                headers: {'content-type' : 'application/json'},
                body: JSON.stringify({like_count: t.like_count, user_id: user.id, post_id: t.id})
            }).then(r=>r.json())
            .then(log=>console.log(log))
        }
    }
    function changeBookmark(){
        if(bookmarked === false){
            setBookmarked(!bookmarked)
            fetch('http://localhost:3000/api/set-bookmark',{
                method: 'POST',
                headers: {'content-type' : 'application/json'},
                body: JSON.stringify({user_id: user.id, post_id: t.id})
            }).then(r=>r.json())
            .then(log=>console.log(log))
        }else{
            setBookmarked(!bookmarked)
            fetch('http://localhost:3000/api/un-bookmark',{
                method: 'PATCH',
                headers: {'content-type' : 'application/json'},
                body: JSON.stringify({user_id: user.id, post_id: t.id})
            }).then(r=>r.json())
            .then(log=>console.log(log))
        }
    }
    function changePopup(){
        setMentionPop(!mentionPop)
    }

    return(
        <div className='single-tweet'>
            <img className="user-image" src={t.owner.avatar} />
            <p className="name">{t.owner.name}</p>
            <p className="username">{t.owner.username}</p>
            <p className="tweet-text">{t.text}</p>
            {t.owner.username === user.username ? <p>...</p> : null}
            <div className="tweet-buttons">
                {mentionPop ? <MentionPopup changePopup={changePopup}/> : <button onClick={changePopup} className="tweet-mentions">💬 off</button>}
                <button className="tweet-retweets">🔄 {t.repost_count}</button>
                {liked ? <button onClick={()=>changeLike()} className="tweet-liked">❤️ {t.like_count}</button> : 
                <button onClick={()=>changeLike()} className="tweet-likes">♡ {t.like_count}</button>}
                {bookmarked ? <button onClick={changeBookmark} className="tweet-bookmarks">📘 </button> : 
                <button onClick={changeBookmark} className="tweet-bookmarks">📑 </button> }
            </div>
         </div>
    )
}