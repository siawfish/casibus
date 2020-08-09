import React, { Component } from 'react'
import Interests from '../featuresComponents/Interests'
import Header from '../featuresComponents/Header'
import { BrowserRouter, Route } from 'react-router-dom'
import Profile from '../featuresComponents/Profile'

export default class Midpane extends Component {
    render() {
        return (
            <div className="mid">

                <Header />

                <BrowserRouter>
                    <Route path="/home" component={ Interests } />
                    <Route path="/profile" component={ Profile } />
                </BrowserRouter>

            </div>
        )
    }
}
