import React, { Component } from 'react'
// import caseImg from '../../assets/images/caseImg.jpg'
import {  FaSignature } from 'react-icons/fa'
import { GoComment } from 'react-icons/go'
import { RiShareForwardBoxLine } from 'react-icons/ri'
import avi from '../../assets/images/avi.jpg'
import { connect } from 'react-redux'
import moment from 'moment'

class Case extends Component {
    render() {
        const { casefile, user } = this.props
        const author = user[0]
        return (
            <>
                <div className="casesCon">
                    <div className="casesAvatarCon">
                        <img src={avi} alt="avatar"/>
                    </div>
                    <div className="inputCol">
                        <div className="caseAuthor">
                            <span className="author">Dr. {author && author.name}</span>
                            <div className="dot"></div>
                            <span className="timestamp">{moment(casefile.createdAt.toDate()).fromNow()}</span>
                        </div>
                        <p>
                            {casefile.caption}
                        </p>
                        {/* <div className="mediaCon">
                            <img src={caseImg} alt="caseMedia"/>
                            <img src={caseImg} alt="caseMedia"/>
                            <img src={caseImg} alt="caseMedia"/>
                            <img src={caseImg} alt="caseMedia"/>
                        </div> */}
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

const mapStateToProps = (state, props) => {
    return {
        user:state.user.users.filter(user=>user.uid === props.casefile.creator)
    }
}

export default connect(mapStateToProps)(Case)
