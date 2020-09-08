import React, { Component } from 'react'
import logo from '../../assets/images/logo.png'
import { Link } from "react-router-dom"
import Register from './Register'

export default class Welcome extends Component {
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
            <>
                <div className="listCon">
                    <div className="logoCon">
                        <img src={logo} alt="logo"/>
                    </div>
                    <h1>Discover and share critical information with other health professionals in real time</h1>
                    <h5>Join Casibus today.</h5>
                    <button onClick={this.register} className="btnFill">Sign up</button>
                    <Link to="/login"><button className="btnBorder">Sign in</button></Link>
                </div>
                <Register show={this.state.show} handleClose={this.handleClose} />
            </>
        )
    }
}
