import React, { Component } from 'react'
import { FaPowerOff } from 'react-icons/fa'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

class Logout extends Component {
    render() {
        return (
            <button onClick={()=>this.props.signOut()} className="logout"><FaPowerOff /></button>
        )
    }
}

const mapDispatchToProps = {
    signOut
}

export default connect(null, mapDispatchToProps)(Logout)
