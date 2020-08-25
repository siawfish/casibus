import React, { Component } from 'react'
import Outterpane from '../components/structureComponents/Outterpane'
import Sidepane from '../components/structureComponents/Sidepane'
import Midpane from '../components/structureComponents/Midpane'
import { connect } from 'react-redux'


class Home extends Component {
    render() {
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
}

export default connect(mapStateToProps)(Home)
