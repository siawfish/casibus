import React, { Component } from 'react'
import avi from '../../assets/images/avi.jpg'
import { connect } from 'react-redux'
import { follow } from '../../store/actions/userActions'


class SuggestionsTile extends Component {
    follow = (uid) => {
        this.props.follow(this.props.uid, uid)
    }
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
                <button onClick={()=>this.follow(suggestion.uid)} className="btnBorder">Follow</button>
            </div>
        )
    }
}

const mapDispatchToProps = {
    follow
}

export default connect(null, mapDispatchToProps)(SuggestionsTile)
