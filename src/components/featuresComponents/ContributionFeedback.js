import React, { Component } from 'react'

export default class ContributionFeedback extends Component {
    
    render() {
        return (
            <div className={this.props.switch} id="snackbar">
                {this.props.switch ==="show sent" ? 
                    "Contribution sent!"
                    : 
                    "Oops! an error occured."
                }
            </div>
        )
    }
}
