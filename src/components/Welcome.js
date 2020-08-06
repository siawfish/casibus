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
                <h1>See what health professionals are talking about</h1>
                <h5>Join Casibus today.</h5>
                <button className="btnFill">Sign up</button>
                <Link to="/login"><button className="btnBorder">Sign in</button></Link>
            </div>
        )
    }
}
