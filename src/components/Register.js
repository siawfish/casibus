import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import logo from '../assets/images/logo.png'
import moment from 'moment'
import months from '../assets/resource/dates'
import jobs from '../assets/resource/jobs'

export default class Register extends Component {
    constructor(){
        super()
        this.state = {
            show:true
        }
    }

    days = () => {
        const days = []
        const dateStart = moment()
        const dateEnd = moment().add(30, 'days')
        while (dateEnd.diff(dateStart, 'days') >= 0) {
         days.push(dateStart.format('D'))
         dateStart.add(1, 'days')
        }
        return days
    }

    years = () => {
        const years = []
        const dateStart = moment().subtract(16, 'y')
        const dateEnd = moment().subtract(80, 'y')
        while (dateEnd.diff(dateStart, 'years') <= 0) {
          years.push(dateStart.format('YYYY'))
          dateStart.subtract(1, 'year')
        }
        return years
    }

    handleClose = () => {
        this.setState({
            show:false
        })
    }

    render() {
        return (
            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Body>
                    <div className="logoCon modalLogo">
                        <img src={logo} alt="logo"/>
                    </div>
                    <form className="registerForm">
                        <h4>Create your account</h4>
                        <div className="inputCon">
                            <label>Full Name</label>
                            <input type="text" />
                        </div>
                        <div className="inputCon">
                            <label>Email</label>
                            <input type="email" />
                        </div>
                        <div className="inputCon">
                            <label>Job Title</label>
                            <input type="text" list="jobs"/>
                            <datalist id="jobs">
                                {jobs.map((job)=>{
                                    return <option>{job}</option>
                                })}
                            </datalist>
                        </div>
                        <div className="inputRow">
                            <div className="inputCon">
                                <label>Date</label>
                                <input list="days" />
                                <datalist id="days">
                                    {this.days().map((day)=>{
                                        return <option>{day}</option>
                                    })}
                                </datalist>
                            </div>
                            <div className="inputCon unique">
                                <label>Month</label>
                                <input list="months" />
                                <datalist id="months">
                                    {months.map((month)=>{
                                        return <option>{month}</option>
                                    })}
                                </datalist>
                            </div>
                            <div className="inputCon">
                                <label>Year</label>
                                <input list="years" />
                                <datalist id="years">
                                    {this.years().map((year)=>{
                                        return <option>{year}</option>
                                    })}
                                </datalist>
                            </div>
                        </div>
                        <button className="btnFill">Sign up</button>
                    </form>
                </Modal.Body>
            </Modal>
        )
    }
}
