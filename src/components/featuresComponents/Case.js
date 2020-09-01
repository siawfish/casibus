import React, { Component } from 'react'
// import caseImg from '../../assets/images/caseImg.jpg'
import {  FaSignature } from 'react-icons/fa'
import { GoComment } from 'react-icons/go'
import { RiShareForwardBoxLine } from 'react-icons/ri'
import avi from '../../assets/images/avi.jpg'
import { connect } from 'react-redux'
import moment from 'moment'
import DisplayPatientHistory from './DisplayPatientHistory'
import { Link } from 'react-router-dom'
import { FaRegAddressCard, FaPhotoVideo } from 'react-icons/fa'


class Case extends Component {
    constructor(){
        super()
        this.state = {
            commentVisibility:"commentSection hide",
            comment:""
        }
    }

    toggleCommentVisibility = ()=>{
        if(this.state.commentVisibility==="commentSection hide"){
            this.setState({
                commentVisibility:"commentSection show"
            })
            return
        }
        this.setState({
            commentVisibility:"commentSection hide"
        })
    }

    commentInput = (e) => {
        this.autoResize(e)
        this.setState({
            comment:e.target.value
        })
    }

    autoResize = (e) => { 
        e.target.style.height = 'auto'; 
        e.target.style.height = e.target.scrollHeight + 'px'; 
    }

    onHitEnter = (e, cid, uid) => {
        if(e.keyCode === 13){
            e.preventDefault()
            // put the login here
            console.log("CID", cid);
            console.log("UID", uid);
         }
    }

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
                            {author && <Link to={"/profile/"+author.uid}><span className="author">Dr. {author.name}</span></Link>}
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
                        {
                             casefile.hasHistory ? <DisplayPatientHistory history={casefile.history} /> : null
                        }
                        <div className="actionBtns">
                            <button onClick={this.toggleCommentVisibility}><GoComment /></button>
                            <button><RiShareForwardBoxLine /></button>
                            <button><FaSignature /></button>
                        </div>
                        <div className={this.state.commentVisibility}>
                            <div className="commentAvatarCon">
                                <img src={avi} alt="avatar"/>
                            </div>
                            <textarea rows="1" onKeyDown={(e)=>this.onHitEnter(e, casefile.cid, author.uid)} onChange={this.commentInput} type="text" placeholder="Enter contribution here..."></textarea>
                            <small>Hit enter to send contribution</small>
                            <div className="additionalInfo">
                                <FaPhotoVideo />
                                <FaRegAddressCard />
                            </div>
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
