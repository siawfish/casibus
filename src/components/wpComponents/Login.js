import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import Register from './Register'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'

class Login extends Component {
    constructor(){
        super()
        this.state = {
            show:false,
            email:'',
            pass:''
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

    handleInput = (e) => {
        let nam = e.target.name;
        let val = e.target.value;
        this.setState({[nam]: val});
    }

    onLogin = (e) => {
        e.preventDefault()
        let cred = {
            email:this.state.email,
            pass:this.state.pass
        }
        this.props.signIn(cred);
    }

    render() {
        return (
            <div className="login">
                <div className="logoCon">
                    <img src={logo} alt="logo"/>
                </div>
                <h2>Log in to Casibus</h2>
                <form className="loginForm">
                    { this.props.err && <div className="err">{this.props.err}</div>}
                    <div className="inputCon">
                        <label>Email</label>
                        <input onChange={this.handleInput} name="email" type="email"/>
                    </div>
                    <div className="inputCon">
                        <label>Password</label>
                        <input onChange={this.handleInput} name="pass" type="password"/>
                    </div>
                    <button onClick={this.onLogin} className="btnBorder">Log in</button>
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

const mapStateToProps = (state) => {
    console.log(state);
    return {
        err:state.auth.signinErr,
        auth:state.auth.status
    }
}

const mapDispatchToProps = {
    signIn
}

export default connect(mapStateToProps, mapDispatchToProps) (Login)