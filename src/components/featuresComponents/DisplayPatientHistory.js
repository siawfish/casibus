import React, { Component } from 'react'

export default class DisplayPatientHistory extends Component {
    constructor(){
        super()
        this.state = {
            visibility:false
        }
    }
    toggleVisibility = () => {
        if(this.state.visibility){
            this.setState({
                visibility:false
            })
            return
        }
        this.setState({
            visibility:true
        })
    }
    render() {
        const { history } = this.props
        return (
            <div className="seeHistory">
                {!this.state.visibility ? 
                    <button onClick={this.toggleVisibility} className="seeHistoryBtn">see patient history</button>
                    : null
                }
                { this.state.visibility ? 
                <>
                <div className="displayHistory">
                    <div className="gender"><span className="genderText">{history.gender === "Male" ? "M" : "F"}</span></div>
                    {history.history.map(h=>
                        <>
                            <div className="question">{h.q}</div>
                            {h.a.map(a2=><div className="answer"><div className="dot"></div>{a2.res}</div>)}
                        </>
                    )}
                </div>
                <button onClick={this.toggleVisibility} className="unseeHistoryBtn">close patient history</button>
                </>
                : null}
            </div>
        )
    }
}
