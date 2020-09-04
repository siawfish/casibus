import React, { Component } from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { getUser } from '../../store/actions/userActions'
import { connect } from 'react-redux'
import Search from './Search'

class Header extends Component {
    // componentDidMount(){
    //     this.props.uid && this.props.getUser(this.props.uid)
    // }
    render() {
        const { loc, user, cases } = this.props
        return (
            <div className="header">
                { loc.pathname.match('/profile') ?
                    <div className="profileHeader">
                        <div className="backIcon">
                            <IoMdArrowRoundBack />
                        </div>
                        <div>
                            { user[0] && <h6>Dr. {user[0].name}</h6> }
                            <small>{ cases.length } cases</small>
                        </div>
                    </div> :
                    null
                }
                {
                    loc.pathname==="/cases" ? 
                    <div className="casesHeader"><h4>Explore Cases</h4> <Search /></div> : null
                }
                {
                    loc.pathname==="/home" || loc.pathname==="/" ?
                    <h4>Home</h4> : null
                }
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        user:state.user.users.filter(user=>user.uid===props.uid),
        cases:state.cases.cases.filter(obj=>obj.creator===props.uid)
    }
}

const mapDispatchToProps = {
    getUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
