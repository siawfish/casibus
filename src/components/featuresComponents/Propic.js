import React, { Component } from 'react'
import propic from '../../assets/images/avi.jpg'

export default class Propic extends Component {
    render() {
        return (
            <div className="propicCon">
                <img src={propic} alt="propic"/>
            </div>
        )
    }
}
