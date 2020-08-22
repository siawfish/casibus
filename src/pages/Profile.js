import React, { Component } from 'react'
import Case from '../components/featuresComponents/Case'
import Propic from '../components/featuresComponents/Propic'
import Bio from '../components/featuresComponents/Bio'

export default class Profile extends Component {
    render() {
        return (
           <>
                <div className="profile">
                    <div className="proBanner">
                        <Propic />
                        <Bio />
                        <div className="tabs">
                            <span className="active">Cases</span>
                            <span>Cosigns</span>
                            <span>Bookmarks</span>
                        </div>
                        <div className="tabsContent">
                            <Case />
                            <Case />
                        </div>
                    </div>
                </div>
           </>
        )
    }
}
