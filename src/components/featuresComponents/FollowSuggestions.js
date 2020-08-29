import React, { Component } from 'react'
import avi from '../../assets/images/avi.jpg'

export default class FollowSuggestions extends Component {
    render() {
        return (
            <div style={{marginTop:20}} className="rightCardsCon">
                    <div className="header">
                        <h5>Follow suggestions</h5>
                    </div>
                <div className="suggestCard">
                    <div className="suggestInfoCon">
                        <img src={avi} alt="suggestImg"/>
                        <div className="suggestInfo">
                            <p>Dr. Riane Amanor</p>
                            <small>Dentist</small>
                        </div>
                    </div>
                    <button className="btnBorder">Follow</button>
                </div>
                <div className="suggestCard">
                    <div className="suggestInfoCon">
                        <img src={avi} alt="suggestImg"/>
                        <div className="suggestInfo">
                            <p>Dr. Jerome Siaw</p>
                            <small>Doctor</small>
                        </div>
                    </div>
                    <button className="btnBorder">Follow</button>
                </div>
                <div className="suggestCard">
                    <div className="suggestInfoCon">
                        <img src={avi} alt="suggestImg"/>
                        <div className="suggestInfo">
                            <p>Dr. Kuuku Richard</p>
                            <small>Pharmacist</small>
                        </div>
                    </div>
                    <button className="btnBorder">Follow</button>
                </div>
                <div className="trendsShowMore">
                    Show more
                </div>
            </div>
            
        )
    }
}
