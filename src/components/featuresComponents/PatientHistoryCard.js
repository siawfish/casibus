import React, { Component } from 'react'
import { IoMdAddCircleOutline, IoIosAdd } from 'react-icons/io'

export default class PatientHistoryCard extends Component {

    addHistory = () => {
        console.log("hi");
    }
    render() {
        return (
            <div className="patientHistoryCon">
                <div className="patientHistory">
                    <label>Patient Gender</label>
                    <div className="genderRow">
                        <div className="gender">
                            <label>Male</label>
                            <input type="checkbox" checked="checked"/>
                            <span class="checkmark"></span>
                        </div>
                        <div className="gender">
                            <label>Female</label>
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </div>
                    </div>

                    <label>Populate Medical History</label>
                    <div className="addHistorycardCon">
                        <div className="addHistoryCard">
                            <input className="borderBottom" placeholder="eg: Currently taking any medication?" />
                            <input className="borderTop" placeholder="eg: No" />
                            <button className="addRes"><IoMdAddCircleOutline /> Add more responses</button>
                        </div>
                        <button onClick={this.addHistory} className="addhis" disabled><IoIosAdd /></button>
                    </div>
                </div>
                <button onClick={this.props.onRemove} className="remove">Remove</button>
            </div>
        )
    }
}
