import home from "../../images/home-icon-twitter.png"
import hashtag from "../../images/hashtag-icon-twitter.png"
import notification from "../../images/notification-icon.png"
import messages from "../../images/envelope-icon-twitter.png"
import bookmarks from "../../images/bookmark-icon-twitter.png"
import profile from "../../images/profile-icon-twitter.png"
import more from "../../images/more-icon-twitter.png"



export default function NavBar (){
    return (
        <div>
            <button id="home-button"><img src={home}/> Home</button>
            <button><img src={hashtag}/> Explore</button>
            <button><img src={messages}/> Messages</button>
            <button><img src={bookmarks}/> Bookmarks</button>
            <button><img src={profile}/> Profile</button>
            <button><img src={more}/> More</button>
        </div>
    )
}