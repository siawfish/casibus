import React, { Component } from 'react'
import { MdAddLocation } from 'react-icons/md'
import { FaHospitalSymbol, FaBirthdayCake } from 'react-icons/fa'
import { BsFillCalendarFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'


export default class Bio extends Component {
    render() {
        return (
            <div className="bioArea">
                <button className="btnBorder">Edit profile</button>
                <div className="bioCon">
                    <h5>Dr. Gerald Amanor</h5>
                    <p className="desc">I love what i do, Being able to save a life is a superpower</p>
                    <p><small><MdAddLocation /> Accra</small><small><FaHospitalSymbol /> St. Joseph's Hospital</small><small><FaBirthdayCake /> 11 January, 1991</small><small><BsFillCalendarFill /> 01 August, 2020</small></p>
                    <div className="followersCount">
                        <Link><span>3,000</span> Followers</Link><Link><span>1,000</span> Following</Link>
                    </div>
                </div>
            </div>
        )
    }
}
