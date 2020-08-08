import React, { Component } from 'react'
import HomeShareCase from '../featuresComponents/HomeShareCase'
import Case from '../featuresComponents/Case'
import Header from '../featuresComponents/Header'

export default class Midpane extends Component {
    render() {
        return (
            <div className="mid">

                <Header />

                <HomeShareCase />

                <Case />

            </div>
        )
    }
}
