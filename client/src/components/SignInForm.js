import './css/popup.css';
import logo from '../images/twitter-logo.png';
import { useState } from 'react'
import './css/signin.css'
export default function SignInForm({ clicked, close, switchForm, setCurrentUser, setIsAuthenticated }){
    const [usernameFound, setUsernameFound] = useState(false);
    const [userData, setUserData] = useState({
        username: '',
        password: ''
    });
    function changeFound (e){
        e.preventDefault();
        fetch('http://localhost:3000/api/find-user',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(userData)
        })
        .then(r=>r.json())
        .then(log=>{
            log.success ? setUsernameFound(!usernameFound) : alert('Username not found')
        })
    }
    function login(e){
        e.preventDefault();
        fetch('http://localhost:3000/api/login',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(userData)
        })
        .then(r=>r.json())
        .then(log=>{
            if (log.error === "Invalid password"){alert('Password Invalid')}
            else{
                setCurrentUser(log)
                setIsAuthenticated(true)
            }
        }) 
    }
    function handleUserData(e){
        setUserData({...userData, [e.target.name]: e.target.value});
    }

    return (clicked ? (
        <div className="popup">
            <div className="popup-inner">
                <button onClick={close} className="close-btn">x</button>
                <img className="twitter-logo" src={logo} alt="twitter's white bird icon"/>

                <p className="title">Sign in to Twitter</p>
                <form>
                    {usernameFound ? <input disabled type="text" name="username" placeholder={userData.username} className="username"/> : 
                    <input className = "username" name="username" onChange={e=>handleUserData(e)} type="text" placeholder="Username"/>}
                    {usernameFound ? <input onChange={e=>handleUserData(e)} className="password" type="text" name="password" placeholder="Password"/> : null}
                    <br></br>
                    {usernameFound ? <input onClick={(e)=>login(e)} className="submit" type="submit" value="Log in"/> : <input name="password" className="submit" onClick={e=>changeFound(e)} type="submit" value="Next"/>}
        
                </form>
                <button className="forgot">Forgot password?</button>
                <p className="no-account">Don't have an account? <span className="sign-up" onClick={switchForm}>Sign up</span></p>
            </div>
        </div>
    ) : null)
}