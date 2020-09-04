import React, { Component } from 'react'
import Interests from '../featuresComponents/Interests'
import { BrowserRouter, Route } from 'react-router-dom'
import Profile from '../../pages/Profile'
import Cases from '../../pages/Cases'

export default class Midpane extends Component {
    render() {
        return (
            <div className="mid">
                <BrowserRouter>
                    <Route path="/home" component={Interests} />
                    <Route path="/cases" component={Cases} />
                    <Route path="/profile/:uid" component={Profile} />
                </BrowserRouter>
            </div>
        )
    }
}
