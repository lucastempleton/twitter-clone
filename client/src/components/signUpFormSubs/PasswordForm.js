import '../css/signup.css'
export default function PasswordForm({changePage, handleNewUserData}){
    return(
        <div>
            <input className="password" name="password-sign-up" type="text" placeholder="password" onChange={handleNewUserData}/>
            <button className="next-btn"onClick={changePage}>Next</button>
        </div>
    )
}