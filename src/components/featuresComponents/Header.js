import React, { Component } from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'


export default class Header extends Component {
    render() {
        const { loc } = this.props
        return (
            <div className="header">
                { loc.pathname ==='/profile' ?
                    <div className="profileHeader">
                        <div className="backIcon">
                            <IoMdArrowRoundBack />
                        </div>
                        <div>
                            <h6>Dr. Gerald Amanor</h6>
                            <small>250 Cases</small>
                        </div>
                    </div> :
                    <h4>Home</h4>
                }
            </div>
        )
    }
}
