import React, { Component } from 'react'
import HomeShareCase from './HomeShareCase'
import Case from './Case'

export default class Interests extends Component {
    render() {
        return (
            <>
                <HomeShareCase uid={this.props.uid} />
                <Case />
            </>
        )
    }
}
