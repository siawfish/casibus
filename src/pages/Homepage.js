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
                <Sidepane />
                
                <Midpane loc={this.props.location} />
                
                <Outterpane />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth:state.auth.status
    }
}

export default connect(mapStateToProps)(Home)
