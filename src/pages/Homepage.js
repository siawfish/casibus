import React, { Component } from 'react'
import { RiSearch2Line, RiChat1Line } from 'react-icons/ri'
import { FiUsers } from 'react-icons/fi'
import logo from '../assets/logo.png'


export default class Homepage extends Component {
    render() {
        return (
            <div className="homepage">
                <div className="left">
                    <div className="listCon">
                        <span><RiSearch2Line /> Follow topics of interest.</span>
                        <span><FiUsers /> Hear what health professionals are talking about.</span>
                        <span><RiChat1Line /> Join the conversation.</span>
                    </div>
                </div>
                <div className="right">
                    <div className="listCon">
                        <div className="logoCon">
                            <img src={logo} alt="logo"/>
                        </div>
                        <h1>See what health professionals<br /> are talking about</h1>
                        <h4>Join Casibus today.</h4>
                        <button className="btnFill">Sign up</button>
                        <button className="btnBorder">Sign in</button>
                    </div>
                </div>
            </div>
        )
    }
}
