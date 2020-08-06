import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import logo from '../assets/logo.png'

export default class Register extends Component {
    constructor(){
        super()
        this.state = {
            show:true
        }
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
                            <input type="text" />
                        </div>
                        <div className="inputRow">
                            <div className="inputCon">
                                <label>Date</label>
                                <input type="email" />
                            </div>
                            <div className="inputCon unique">
                                <label>Month</label>
                                <input type="email" />
                            </div>
                            <div className="inputCon">
                                <label>Year</label>
                                <input type="email" />
                            </div>
                        </div>
                        <button className="btnFill">Sign up</button>
                    </form>
                </Modal.Body>
            </Modal>
        )
    }
}
