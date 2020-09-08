import React, { Component } from 'react'
import { RiSearch2Line, RiChat1Line } from 'react-icons/ri'
import { FiUsers } from 'react-icons/fi'
import {
    BrowserRouter as Router,
    Route, Redirect
} from "react-router-dom"
import Welcome from '../components/wpComponents/Welcome'
import Login from '../components/wpComponents/Login'
import { connect } from 'react-redux'


class Welcomepage extends Component {
    render() {
        if(this.props.auth){
            return <Redirect to="/home" />
        }
        return (
            <div className="homepage">
                <div className="left">
                    <div className="listCon">
                        <span><RiSearch2Line /> Discover critical information.</span>
                        <span><FiUsers /> Share key insights with other health professionals.</span>
                        <span><RiChat1Line /> Join conversations in the health community.</span>
                    </div>
                </div>
                <div className="right">
                    <Router>
                        <Route path="/login" component={Login} />
                        <Route exact path="/" component={Welcome} />
                    </Router>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth:state.firebase.auth.uid
    }
}

export default connect(mapStateToProps)(Welcomepage)
