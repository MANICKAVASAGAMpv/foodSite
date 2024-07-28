import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/frontend_assets/assets'

const LoginPopup = ({ setShowLogin }) => {

    const [currState, setCurrState] = useState("Login")
    return (
        <div className="login-popup">
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {currState === "Login" ?
                        <></> :
                        <input type="text" placeholder='Enter your name' />}
                    <input type="email" placeholder='Enter your email' />
                    <input type="password" placeholder='Enter password' />
                </div>
                <button>{currState === "Sign up" ? "CreateAccount" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type='checkbox' required />
                    <p>By continuning, I agree to the terms of use & privacy policy.</p>
                </div>
                {currState === "Login" ? <p>Create new account? <span onClick={() => setCurrState("Sign up")}>Click here</span></p> : <p>Already have account? <span onClick={() => setCurrState("Login")}>Click here</span></p>}
            </form>
        </div>
    )
}

export default LoginPopup