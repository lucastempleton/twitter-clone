import './css/popup.css';
import { useState } from 'react'
import logo from "../images/twitter-logo.png"
import EmailForm from './signUpFormSubs/EmailForm.js'
import PasswordForm from './signUpFormSubs/PasswordForm.js'

export default function SignUpForm({ close, setCurrentUser, setIsAuthenticated }){
    const [newUserData, setNewUserData] = useState({
        email: "",
        name: "",
        phone: "",
        month: "",
        day: "",
        year: "",
        password: "",
        avatar: "",
        bio: "",
        birthday: null,
        follower_count: 0,
        following_count: 0
    })
    const [pageNumber, setPage] = useState({count:0});
    function changePage(e){
        e.preventDefault();
        // if(!newUserData.email.includes('@'&&'.')){alert('Invalid email format')}
        // else if (newUserData.year < 2010 && newUserData.year !== "" ){
        //     fetch('http://localhost:3000/api/find-email',{
        //         method: 'POST',
        //         headers: { 'Content-type' : 'Application/json'},
        //         body: JSON.stringify(newUserData)
        //     }).then(r=>r.json())
        //     .then(log=>{
        //         console.log(log.success)
        //         !log.success ? 
        //         setPage({count: pageNumber.count +1}) : alert("This email is already in use")    
        //     })
        // }
        // else if ( newUserData.name !== ''){}
        // else{alert('Must be x age to create an account')}
        if (newUserData.year > 2010 || newUserData.year === ""){alert("Must be at least 13 years of age") && console.log(newUserData.year)}
        else if(newUserData.email.includes('@' && '.')){
            fetch('http://localhost:3000/api/find-email',{
                method: 'POST',
                headers: { 'Content-type' : 'Application/json'},
                body: JSON.stringify(newUserData)
            }).then(r=>r.json())
            .then(log=>{
                !log.success ? 
                setPage({count: pageNumber.count +1}) : alert("This email is already in use")    
            })
        }else if(newUserData.phone !== ''){
            fetch('http://localhost:3000/api/find-phone',{
                method: 'POST',
                headers: { 'Content-type' : 'Application/json'},
                body: JSON.stringify(newUserData)
            }).then(r=>r.json())
            .then(log=>{
                !log.success ? 
                setPage({count: pageNumber.count +1}) : alert("This phone number is already in use")    
            })
        }else{alert('Invalid email input')}
    }
    function handleNewUserData(e){
        let key = e.target.name
        setNewUserData({...newUserData, [key]: e.target.value})
    }
    function createUser(e){
        e.preventDefault()
        fetch('http://localhost:3000/api/users',{
            method: 'POST',
            headers: {'Content-type' : 'Application/Json'},
            body: JSON.stringify(newUserData)
        }).then(r=>r.json())
        .then(log=>{
            if(log.id > 0){
                setCurrentUser(log)
                setIsAuthenticated()
            }else{alert('Username is taken.')}
           
        })
    }
    
    if(pageNumber.count === 0){
    return (
        <div className="popup">
            <div className="popup-inner">
                <button onClick={close} className="close-btn">x</button>
                <img className="twitter-logo" src={logo} alt="twitter's white bird icon" />
                <h1>Create your account</h1>
                <EmailForm changePage={changePage} setNewUserData={setNewUserData} handleNewUserData={handleNewUserData} newUserData={newUserData} />
            </div>
        </div>
    )}
    else if(pageNumber.count===1){
        return(
        <div className="popup">
            <div className="popup-inner">
                <button onClick={close} className="close-btn">x</button>
                <img className="twitter-logo" src={logo} alt="twitter's white bird icon" />
                <PasswordForm changePage={changePage} handleNewUserData={handleNewUserData} newUserData={newUserData} />
            </div>
        </div>
        )
    }
    else if(pageNumber.count === 2){
        return(
            <div className="popup">
            <div className="popup-inner">
                <button onClick={close} className="close-btn">X</button>
                <img className="twitter-logo" src={logo} alt="twitter's white bird icon" />
                <form>
                    <input onChange={handleNewUserData} type="text" name="avatar" placeholder="Avatar Image URL" />
                    <input type="text" onChange={handleNewUserData} name="bio" placeholder="bio" maxLength="200"/>
                    <input type="submit" value="Next" onClick={e=>changePage(e)} />
                </form>
            </div>
        </div>
        )
    }
    else if (pageNumber.count === 3){
        return(
            <div className="popup">
                <div className="popup-inner">
                    <button onClick={close} className="close-btn">X</button>
                    <img className="twitter-logo" src={logo} alt="twitter's white bird icon" />
                    <form>
                        <span>@</span>
                        <input type="text" onChange={handleNewUserData} name="username" placeholder="Username" />
                        <input type="submit" value="Submit" onClick={e=>createUser(e)} />
                    </form>
                </div>
            </div>
        )
    }
    else return null
}