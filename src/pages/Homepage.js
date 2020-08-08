import React, { Component } from 'react'
import Outterpane from '../components/structureComponents/Outterpane'
import Sidepane from '../components/structureComponents/Sidepane'
import Midpane from '../components/structureComponents/Midpane'


export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <Sidepane />
                
                <Midpane />
                
                <Outterpane />
            </div>
        )
    }
}
