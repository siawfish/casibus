import React, { Component } from 'react'
import { IoMdAddCircleOutline, IoIosAdd } from 'react-icons/io'

export default class PatientHistoryCard extends Component {
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
                            <input placeholder="eg: Currently taking any medication?" />
                            <input placeholder="eg: No" />
                            <button className="addRes"><IoMdAddCircleOutline /> Add more responses</button>
                        </div>
                        <button className="addhis"><IoIosAdd /></button>
                    </div>
                </div>
                <button className="remove">Remove</button>
            </div>
        )
    }
}
