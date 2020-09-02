import React, { Component } from 'react'

export default class CaseFeedBack extends Component {
    
    render() {
        return (
            <div className={this.props.switch} id="snackbar">
                {this.props.switch ==="show sent" ? 
                    <>{this.props.type==="comment" ? "Contribution posted!" : "Case successfully posted!"}</> 
                    : 
                    "Oops! an error occured."
                }
            </div>
        )
    }
}
