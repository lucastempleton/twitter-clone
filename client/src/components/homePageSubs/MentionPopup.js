import '../css/popup.css'
export default function MentionPopup ({changePopup}){
    return(
        <div className="popup-mentions">
            <div className="popup-mentions-inner">
                <button onClick={changePopup} className="close-btn">x</button>
            
            </div>
        </div>
    )
}