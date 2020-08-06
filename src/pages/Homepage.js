import React, { Component } from 'react'
import { RiSearch2Line, RiChat1Line } from 'react-icons/ri'
import { FiUsers } from 'react-icons/fi'
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom"
import Welcome from '../components/Welcome'
import Login from '../components/Login'
import Register from '../components/Register'


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
                    <Router>
                        <Route path="/login" component={Login} />
                        <Route exact path="/" component={Welcome} />
                    </Router>
                </div>
                <Register />
            </div>
        )
    }
}
