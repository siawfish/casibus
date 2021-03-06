import React, { Component } from 'react'
import { MdAddLocation } from 'react-icons/md'
import { FaHospitalSymbol, FaBirthdayCake } from 'react-icons/fa'
import { BsFillCalendarFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { follow, unfollow } from '../../store/actions/userActions'
import { connect } from 'react-redux'


class Bio extends Component {
    follow = () => {
        this.props.follow(this.props.authId, this.props.user.uid)
    }

    unfollow = () => {
        this.props.unfollow(this.props.authId, this.props.user.uid)
    }
    render() {
        const { user, authId } = this.props
        return (
            <div className="bioArea">
                {user.uid === authId ? <button className="btnBorder">Edit profile</button> : null}
                {user.uid !== authId ? 
                    <>
                    { user.followers &&  user.followers.includes(authId) ? <button onClick={this.unfollow} className="btnBorder">Unfollow</button> : <button onClick={this.follow} className="btnBorder">Follow</button> }
                    </> : 
                null}
                <div className="bioCon">
                    { user.name && <h5>Dr. {user.name}</h5>}
                    { user.bio && <p className="desc">{user.bio}</p>}
                    <p>
                        { user.loc && <small><MdAddLocation /> {user.loc}</small> }
                        { user.institution && <small><FaHospitalSymbol /> {user.institution}</small> }
                        { user.dob && <small><FaBirthdayCake /> {user.dob}</small> }
                        { user.createdAt && <small><BsFillCalendarFill /> {moment((user.createdAt).toDate()).calendar()}</small> }
                    </p>
                    <div className="followersCount">
                        <Link><span>{user.followers && user.followers.length}</span> Followers</Link><Link><span>{user.followers && user.following.length}</span> Following</Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = {
    follow,
    unfollow
}

export default connect(null, mapDispatchToProps)(Bio)

