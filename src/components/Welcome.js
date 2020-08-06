import React, { Component } from 'react'
import logo from '../assets/logo.png'
import { Link } from "react-router-dom"

export default class Welcome extends Component {
    render() {
        return (
            <div className="listCon">
                <div className="logoCon">
                    <img src={logo} alt="logo"/>
                </div>
                <h1>See what health professionals<br /> are talking about</h1>
                <h4>Join Casibus today.</h4>
                <button className="btnFill">Sign up</button>
                <button className="btnBorder"><Link to="/login">Sign in</Link></button>
            </div>
        )
    }
}
