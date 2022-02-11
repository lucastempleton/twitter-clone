import twitterLogo from "../../images/twitter-logo.png"
export default function Header(){
    return(
    <div>
        <button className="twitter-logo-button"><img className="twitter-logo-header" src={twitterLogo}/></button>
        <p className="home-header">Home</p>
    </div>
    )
}