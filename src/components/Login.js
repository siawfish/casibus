import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export default class Login extends Component {
    render() {
        return (
            <div className="login">
                <div className="logoCon">
                    <img src={logo} alt="logo"/>
                </div>
                <h1>Log in to Casibus</h1>
                <form className="loginForm">
                    <div className="inputCon">
                        <label>Email</label>
                        <input type="email"/>
                    </div>
                    <div className="inputCon">
                        <label>Password</label>
                        <input type="password"/>
                    </div>
                    <button className="btnBorder">Log in</button>
                </form>
                <div className="links">
                    <Link to="#">Forgot password?</Link>
                    <Link to="/signup">Sign up for Casibus</Link>
                </div>
            </div>
        )
    }
}
