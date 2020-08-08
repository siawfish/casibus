import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import Register from './Register'

export default class Login extends Component {
    constructor(){
        super()
        this.state = {
            show:false
        }
    }

    register = () => {
        this.setState({
            show:true
        })
    }

    handleClose = () => {
        this.setState({
            show:false
        })
    }
    render() {
        return (
            <div className="login">
                <div className="logoCon">
                    <img src={logo} alt="logo"/>
                </div>
                <h2>Log in to Casibus</h2>
                <form className="loginForm">
                    <div className="inputCon">
                        <label>Email</label>
                        <input type="email"/>
                    </div>
                    <div className="inputCon">
                        <label>Password</label>
                        <input type="password"/>
                    </div>
                    <button className="btnBorder">Log in</button>
                </form>
                <div className="links">
                    <Link to="#">Forgot password?</Link>
                    <Link onClick={this.register}>Sign up for Casibus</Link>
                </div>
                <Register show={this.state.show} handleClose={this.handleClose} />
            </div>
        )
    }
}
