import { useState } from 'react'
import '../css/signup.css'

export default function EmailForm({changePage, setNewUserData, handleNewUserData, newUserData}){
    const [verificationMethodBoolean, setBoolean] = useState(false);
    const verificationMethod = verificationMethodBoolean ? "phone" : "email";
    const verificationInstead =  !verificationMethodBoolean ? "phone" : "email";
    function changeVerificationBoolean(){
        setNewUserData({...newUserData, [verificationMethod]: ""});
        setBoolean(!verificationMethodBoolean);
    }
    const months= ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];
    const days = []
    const years = []
    for(let i = 1; i <= 31; i++){days.push(i)}
    for(let i = 2022; i >= 1902; i--){years.push(i)}
    return(
        <form>
                    <input type="text" onChange={handleNewUserData} className="name" name="name" placeholder="Name" maxLength={50} />
                    <input type="text" onChange={handleNewUserData} className="verification" name={verificationMethod} value={newUserData[verificationMethod]} placeholder={verificationMethod.charAt(0).toUpperCase()+verificationMethod.slice(1)} />
                    <span onClick={changeVerificationBoolean}>Use {verificationInstead} instead</span>
                    <p>Date of birth</p>
                    <p>This will not be shown publicily. Confrm your own age, even if this account is for a business, a pet, or something else.</p>
                    <select onChange={handleNewUserData} name="month">
                    <option></option>
                        {
                            months.map(month => {
                                return (<option name="month" value={month}>{month}</option>)
                                }
                            )
                        }
                    </select>
                    <select onChange={handleNewUserData} name="day">
                        <option></option>
                        {
                            days.map(day => {
                                return (<option name="day" value={day}>{day}</option>)
                                }
                            )
                        }
                    </select>
                    <select onChange={handleNewUserData} name="year">
                    <option></option>
                        {
                            years.map(year => {
                                return (<option name="year" value={year}>{year}</option>)
                                }
                            )
                        }
                    </select>
                    <button className="next-btn" onClick={e=>changePage(e)}>Next</button>
                </form>
    )
}