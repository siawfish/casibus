import React, { Component } from 'react'
import caseImg from '../../assets/images/caseImg.jpg'
import {  FaSignature } from 'react-icons/fa'
import { GoComment } from 'react-icons/go'
import { RiShareForwardBoxLine } from 'react-icons/ri'
import avi from '../../assets/images/avi.jpg'

export default class Case extends Component {
    render() {
        return (
            <>
                <div className="casesCon">
                    <div className="casesAvatarCon">
                        <img src={avi} alt="avatar"/>
                    </div>
                    <div className="inputCol">
                        <div className="caseAuthor">
                            <span className="author">Dr. Gerald Amanor</span>
                            <div className="dot"></div>
                            <span className="timestamp">20m</span>
                        </div>
                        <p>
                            Qui id dolor do duis labore aliquip qui quis velit. 
                            Lorem et consectetur pariatur nisi occaecat nulla magna do ut pariatur occaecat. 
                            Consequat eu do sit et est qui.
                        </p>
                        <div className="mediaCon">
                            <img src={caseImg} alt="caseMedia"/>
                            <img src={caseImg} alt="caseMedia"/>
                            <img src={caseImg} alt="caseMedia"/>
                            <img src={caseImg} alt="caseMedia"/>
                        </div>
                        <div className="actionBtns">
                            <span><GoComment /></span>
                            <span><RiShareForwardBoxLine /></span>
                            <span><FaSignature /></span>
                        </div>
                    </div>
                </div>

                <div className="casesCon">
                    <div className="casesAvatarCon">
                        <img src={avi} alt="avatar"/>
                    </div>
                    <div className="inputCol">
                        <div className="caseAuthor">
                            <span className="author">Dr. Amma Darkoa</span>
                            <div className="dot"></div>
                            <span className="timestamp">20m</span>
                        </div>
                        <p>
                            Qui id dolor do duis labore aliquip qui quis velit. 
                            Lorem et consectetur pariatur nisi occaecat nulla magna do ut pariatur occaecat. 
                            Consequat eu do sit et est qui.
                        </p>
                        <div className="actionBtns">
                            <span><GoComment /></span>
                            <span><RiShareForwardBoxLine /></span>
                            <span><FaSignature /></span>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
