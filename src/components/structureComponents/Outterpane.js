import React, { Component } from 'react'
import FollowSuggestions from '../featuresComponents/FollowSuggestions'
import Trends from '../featuresComponents/Trends'
import Search from '../featuresComponents/Search'

export default class Outterpane extends Component {
    render() {
        return (
            <div className="right">
                {
                    this.props.loc.pathname !=="/cases" ? <Search /> : null
                }
                <Trends />
                <FollowSuggestions uid={this.props.uid} />
            </div>
        )
    }
}
