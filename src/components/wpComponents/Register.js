import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import logo from '../../assets/images/logo.png'
import moment from 'moment'
import months from '../../assets/resource/dates'
import jobs from '../../assets/resource/jobs'
import { connect } from 'react-redux'
import { register } from '../../store/actions/authActions'

class Register extends Component {
    constructor(){
        super()
        this.state = {
            show:true,
            name:"",
            month:"",
            day:"",
            email:"",
            year:"",
            title:"",
            pass:""
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

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    onSubmit = (e) => {
        e.preventDefault()
        let user = {
            name:this.state.name,
            email:this.state.email,
            pass:this.state.pass,
            title:this.state.title,
            dob:this.state.day+" "+this.state.month+", "+this.state.year
        }
        this.props.register(user)
    }

    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Body>
                    <div className="logoCon modalLogo">
                        <img src={logo} alt="logo"/>
                    </div>
                    <form className="registerForm">
                        <h4>Create your account</h4>
                        { this.props.err && <div className="err">{this.props.err}</div>}
                        <div className="inputCon">
                            <label>Full Name</label>
                            <input name="name" onChange={this.myChangeHandler} type="text" />
                        </div>
                        <div className="inputCon">
                            <label>Email</label>
                            <input name="email" onChange={this.myChangeHandler} type="email" />
                        </div>
                        <div className="inputCon">
                            <label>Password</label>
                            <input name="pass" onChange={this.myChangeHandler} type="password" />
                        </div>
                        <div className="inputCon">
                            <label>Job Title</label>
                            <input name="title" onChange={this.myChangeHandler} type="text" list="jobs"/>
                            <datalist id="jobs">
                                {jobs.map((job)=>{
                                    return <option>{job}</option>
                                })}
                            </datalist>
                        </div>
                        <div className="inputRow">
                            <div className="inputCon">
                                <label>Date</label>
                                <input name="day" onChange={this.myChangeHandler} list="days" />
                                <datalist id="days">
                                    {this.days().map((day)=>{
                                        return <option>{day}</option>
                                    })}
                                </datalist>
                            </div>
                            <div className="inputCon unique">
                                <label>Month</label>
                                <input name="month" onChange={this.myChangeHandler} list="months" />
                                <datalist id="months">
                                    {months.map((month)=>{
                                        return <option>{month}</option>
                                    })}
                                </datalist>
                            </div>
                            <div className="inputCon">
                                <label>Year</label>
                                <input name="year" onChange={this.myChangeHandler} list="years" />
                                <datalist id="years">
                                    {this.years().map((year)=>{
                                        return <option>{year}</option>
                                    })}
                                </datalist>
                            </div>
                        </div>
                        <button onClick={this.onSubmit} className="btnFill">Sign up</button>
                    </form>
                </Modal.Body>
            </Modal>
        )
    }
}

const mapDispatchToProps = {
    register
}

const mapStateToProps = (state) => {
    return {
        err:state.auth.err,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
