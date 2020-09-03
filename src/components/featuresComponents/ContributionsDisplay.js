import React, { Component } from 'react'
import avi from '../../assets/images/avi.jpg'
import { connect } from 'react-redux'
import moment from 'moment'

class ContributionsDisplay extends Component {
    render() {
        return (
            <div className="commentDisplay">
                <div className="commentAvatarCon">
                    <img src={avi} alt="avatar"/>
                </div>
                <div className="commentBubble">
                    <strong>{this.props.author[0] && this.props.author[0].name}</strong> {this.props.contribution.caption}
                    <small>
                        {moment(this.props.contribution.createdAt.toDate()).fromNow()}
                    </small>
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

export default connect(mapStateToProps)(ContributionsDisplay)
