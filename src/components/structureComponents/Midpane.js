import React, { Component } from 'react'
import Interests from '../featuresComponents/Interests'
import Header from '../featuresComponents/Header'
import { BrowserRouter, Route } from 'react-router-dom'
import Profile from '../../pages/Profile'

export default class Midpane extends Component {
    render() {
        const { props } = this.props
        return (
            <div className="mid">
                <Header uid={props.match.params.uid} loc={ props.location } />
                <BrowserRouter>
                    <Route path="/home">
                        <Interests uid={props.auth} />
                    </Route>
                    <Route path="/profile/:uid" component={Profile} />
                </BrowserRouter>

            </div>
        )
    }
}
