import logo from '../images/twitter-logo.png';
import wallpaper from '../images/twitter-wallpaper.jpeg';
import Footer from "./Footer"
import './css/login.css'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'
import { useState } from 'react'

export default function LoginPage ({setCurrentUser, setIsAuthenticated}){
    const [signInForm, setSignInForm] = useState(false)
    function changeSignInForm(){
        setSignInForm(!signInForm)
    }
    const [signUpForm, setSignUpForm] = useState(false)
    function changeSignUpForm(){
        setSignUpForm(!signUpForm)
    }
    function switchForm(){
        setSignUpForm(!signUpForm)
        setSignInForm(!signInForm)
    }
    return(
        <div className="login-page">
            <div className="login-page-container">
                <img className="wallpaper" src={wallpaper} alt="Blue and white graffiti with twitter logo" /> 
                <div className="right">
                    <img className="twitter-logo-main" src={logo} alt="twitter's white bird icon" />
                    <p className="header-1">Happening now</p>
                    <p className="header-2">Join Twitter today.</p>
                    <button onClick={changeSignUpForm} className="sign-up-button">Sign up with phone or email</button>
                    <p className="header-3">Already have an account?</p>
                    <button onClick={changeSignInForm} className="sign-in-button">Sign in</button>
                </div>
                <footer className="footer">
                    <Footer />
                </footer>
                <SignInForm clicked={signInForm} switchForm={switchForm} close={changeSignInForm} setCurrentUser={setCurrentUser} setIsAuthenticated={setIsAuthenticated}/>
                {
                    signUpForm ? 
                    <SignUpForm close={changeSignUpForm} setCurrentUser={setCurrentUser} setIsAuthenticated={setIsAuthenticated}/> : null
                }
            </div>
        </div>
    )
}