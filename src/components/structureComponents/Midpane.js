import React, { Component } from 'react'
import HomeShareCase from '../featuresComponents/HomeShareCase'
import Case from '../featuresComponents/Case'

export default class Midpane extends Component {
    render() {
        return (
            <div className="mid">

                <div className="header">
                    <h4>Home</h4>
                </div>

                <HomeShareCase />

                <Case />

            </div>
        )
    }
}
