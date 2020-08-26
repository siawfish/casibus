import React, { Component } from 'react'
import { MdAddLocation } from 'react-icons/md'
import { FaHospitalSymbol, FaBirthdayCake } from 'react-icons/fa'
import { BsFillCalendarFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import moment from 'moment'


export default class Bio extends Component {
    render() {
        const { user } = this.props
        return (
            <div className="bioArea">
                <button className="btnBorder">Edit profile</button>
                <div className="bioCon">
                    { user.name && <h5>Dr. {user.name}</h5>}
                    { user.bio && <p className="desc">I love what i do, Being able to save a life is a superpower</p>}
                    <p>
                        { user.loc && <small><MdAddLocation /> {user.loc}</small> }
                        { user.ins && <small><FaHospitalSymbol /> {user.ins}</small> }
                        { user.dob && <small><FaBirthdayCake /> {user.dob}</small> }
                        { user.createdAt && <small><BsFillCalendarFill /> {moment((user.createdAt).toDate()).calendar()}</small> }
                    </p>
                    <div className="followersCount">
                        <Link><span>3,000</span> Followers</Link><Link><span>1,000</span> Following</Link>
                    </div>
                </div>
            </div>
        )
    }
}