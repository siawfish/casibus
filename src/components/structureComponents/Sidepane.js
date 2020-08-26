import React, { Component } from 'react'
import logo from '../../assets/images/logo.png'
import { FaPager, FaUser, FaSlackHash, FaHospital, FaBell } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import ShareCaseModal from '../featuresComponents/ShareCaseModal'
import Logout from '../featuresComponents/Logout'

export default class Sidepane extends Component {
    render() {
        return (
            <div className="left">
                <div className="sidepaneTop">
                    <div className="logoCon">
                        <img src={logo} alt="logo"/>
                    </div>
                    <ul>
                        <li><Link to="/home"><span><FaHospital /></span>Interests</Link></li>
                        <li><Link to="#"><span><FaSlackHash /></span>Cases</Link></li>
                        <li><Link to="#"><span><FaBell /></span>Notifications</Link></li>
                        <li><Link to="#"><span><FaPager /></span>Pagers</Link></li>
                        <li><Link to="/profile"><span><FaUser /></span>Profile</Link></li>
                    </ul>
                    <ShareCaseModal />
                </div>

                <Logout />
                
            </div>
        )
    }
}
