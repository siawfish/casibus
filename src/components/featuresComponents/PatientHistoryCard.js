import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { IoMdAddCircleOutline, IoIosAdd } from 'react-icons/io'

export default class PatientHistoryCard extends Component {

    constructor(){
        super()
        this.state= {
            gender:"",
            history:[{
                q:"",
                a:[]
            }]
        }
    }

    addHistory = () => {
        console.log("hi");
    }

    onCheck = (e) => {
        var genders = ReactDOM.findDOMNode(this).querySelectorAll("input[type='checkbox']")
        genders.forEach(element => {
            element.checked=false
        })
        var gender  = e.target.previousElementSibling.value
        this.setState({
            gender:gender
        })
        e.target.previousElementSibling.checked=true
    }

    render() {
        return (
            <div className="patientHistoryCon">
                <div className="patientHistory">
                    <label>Patient Gender</label>
                    <div className="genderRow">
                        <div className="gender">
                            <label>Male</label>
                            <input value="Male" type="checkbox" />
                            <button onClick={this.onCheck} class="checkmark"></button>
                        </div>
                        <div className="gender">
                            <label>Female</label>
                            <input value="Female" type="checkbox" />
                            <button onClick={this.onCheck} class="checkmark"></button>
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
