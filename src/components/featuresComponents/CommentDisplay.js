import React, { Component } from 'react'
import avi from '../../assets/images/avi.jpg'

export default class CommentDisplay extends Component {
    render() {
        return (
            <div className="commentDisplay">
                <div className="commentAvatarCon">
                    <img src={avi} alt="avatar"/>
                </div>
                <div className="commentBubble">
                    <strong>Dr. Gerald Amanor</strong> Officia pariatur ad excepteur sunt voluptate officia ex ea nisi aliqua qui culpa voluptate.
                </div>
            </div>
        )
    }
}
