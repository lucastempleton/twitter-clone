import joe from '../../images/default-joe.jpeg'
import {useState} from 'react'
export default function Tweet({addTweet, user}){
    // console.log(user)
    const [tweet, setTweet] = useState({
        text: '',
        user_id: user.id,
        reply: 'everyone',
        like_count: 0,
        repost_count: 0
    })
    function changeTweet(e){
        let key = e.target.name
        setTweet({...tweet, [key]: e.target.value})
    }
    function submitTweet(e){
        e.preventDefault()
        fetch('http://localhost:3000/api/posts',{
            method: 'POST',
            headers: {'content-type' : 'application/json'},
            body: JSON.stringify(tweet)
        }).then(r=>r.json())
        .then(log => {
            addTweet(log)
            setTweet({
                text: '',
                user_id: user.id,
                reply: 'everyone',
                like_count: 0,
                repost_count: 0
            })
        })
    }
    
    return(
        <div>
            {user.avatar !== null ?  <img src={user.avatar} /> : <img src={joe} /> }
            <form>
                <input maxLength='500' autoComplete="off" onChange={changeTweet} name="text" type="text" value={tweet.text} className='tweet-input' placeholder="What's happening?"></input>
                <select onChange={changeTweet} name='reply' className="reply-box">
                    <option value="everyone">🌎 Everyone can reply</option>
                    <option value="followers">👤 People you follow can reply</option>
                    <option value="mentions">🗣 Only people you mention can reply</option>
                </select>
                {tweet.text.length >= 2 ? <input onClick={e=>submitTweet(e)} className='tweet-button-form' type="submit" value="Tweet"/> :
                <input disabled className='tweet-button-form-invalid' type="submit" value="Tweet"/>}
            </form>
        </div>
    )
}