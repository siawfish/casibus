import React, { Component } from 'react'
import Outterpane from '../components/structureComponents/Outterpane'
import Sidepane from '../components/structureComponents/Sidepane'
import Midpane from '../components/structureComponents/Midpane'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


class Home extends Component {
    render() {
        if(!this.props.auth){
            return <Redirect to="/" />
        }
        return (
            <div className="home">
                <Sidepane uid={this.props.auth} />
                
                <Midpane props={this.props} />
                
                <Outterpane loc={this.props.location} uid={this.props.auth} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth:state.firebase.auth.uid
    }
}

export default connect(mapStateToProps)(Home)
