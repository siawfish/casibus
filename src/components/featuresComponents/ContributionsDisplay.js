import React, { Component } from 'react'
import avi from '../../assets/images/avi.jpg'
import { connect } from 'react-redux'

class ContributionsDisplay extends Component {
    render() {
        return (
            <div className="commentDisplay">
                <div className="commentAvatarCon">
                    <img src={avi} alt="avatar"/>
                </div>
                <div className="commentBubble">
                    <strong>{this.props.author && this.props.author[0].name}</strong> {this.props.contribution.caption}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        author:state.user.users.filter(author=>author.uid===props.contribution.creator)
    }
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ContributionsDisplay)
