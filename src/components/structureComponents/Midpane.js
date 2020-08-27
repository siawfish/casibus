import React, { Component } from 'react'
import Interests from '../featuresComponents/Interests'
import Header from '../featuresComponents/Header'
import { BrowserRouter, Route } from 'react-router-dom'
import Profile from '../../pages/Profile'

export default class Midpane extends Component {
    render() {
        
        return (
            <div className="mid">

                <Header uid={this.props.uid} loc={ this.props.loc } />
                <BrowserRouter>
                    <Route path="/home">
                        <Interests uid={this.props.uid} />
                    </Route>
                    <Route path="/profile/:uid" component={Profile} />
                </BrowserRouter>

            </div>
        )
    }
}
