import TweetRender from './TweetRender.js'

export default function Tweets({tweets, user}){
    return(
        <div className='tweets'>
            {
                tweets.map((t, index) => 
                    <TweetRender key={index} tweet={t} user={user}/>
                )
            }
        </div>
        
    )
}