import React, { Component } from 'react'
import logo from '../../assets/images/logo.png'
import { FaPager, FaUser, FaSlackHash, FaHospital, FaBell } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default class Sidepane extends Component {
    render() {
        return (
            <div className="left">
                <div className="logoCon">
                    <img src={logo} alt="logo"/>
                </div>
                <ul>
                    <li><Link to="#"><span><FaHospital /></span>Interests</Link></li>
                    <li><Link to="#"><span><FaSlackHash /></span>Cases</Link></li>
                    <li><Link to="#"><span><FaBell /></span>Notifications</Link></li>
                    <li><Link to="#"><span><FaPager /></span>Pagers</Link></li>
                    <li><Link to="#"><span><FaUser /></span>Profile</Link></li>
                </ul>
                <button className="btnFill">Post</button>
            </div>
        )
    }
}
