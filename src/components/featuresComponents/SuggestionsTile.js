import React, { Component } from 'react'
import avi from '../../assets/images/avi.jpg'

export default class SuggestionsTile extends Component {
    render() {
        const { suggestion } = this.props
        return (
            <div className="suggestCard">
                <div className="suggestInfoCon">
                    <img src={avi} alt="suggestImg"/>
                    <div className="suggestInfo">
                        <p>Dr. {suggestion.name}</p>
                        <small>{suggestion.title}</small>
                    </div>
                </div>
                <button className="btnBorder">Follow</button>
            </div>
        )
    }
}