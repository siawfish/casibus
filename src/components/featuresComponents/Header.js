import React, { Component } from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { getUser } from '../../store/actions/userActions'
import { connect } from 'react-redux'

class Header extends Component {
    componentDidMount(){
        this.props.uid && this.props.getUser(this.props.uid)
    }
    render() {
        const { loc, user } = this.props
        return (
            <div className="header">
                { loc.pathname.match('/profile') ?
                    <div className="profileHeader">
                        <div className="backIcon">
                            <IoMdArrowRoundBack />
                        </div>
                        <div>
                            { user.name && <h6>Dr. {user.name}</h6> }
                            <small>250 Cases</small>
                        </div>
                    </div> :
                    <h4>Home</h4>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user:state.user.user
    }
}

const mapDispatchToProps = {
    getUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
