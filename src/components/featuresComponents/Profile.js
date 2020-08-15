import React, { Component } from 'react'
import propic from '../../assets/images/avi.jpg'

export default class Profile extends Component {
    render() {
        return (
            <div className="profile">
                <div className="proBanner">
                    <div className="propicCon">
                        <img src={propic} alt="propic"/>
                    </div>
                </div>
            </div>
        )
    }
}
