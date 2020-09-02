import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// import caseImg from '../../assets/images/caseImg.jpg'
import {  FaSignature } from 'react-icons/fa'
import { GoComment } from 'react-icons/go'
import { RiShareForwardBoxLine } from 'react-icons/ri'
import avi from '../../assets/images/avi.jpg'
import { connect } from 'react-redux'
import moment from 'moment'
import DisplayPatientHistory from './DisplayPatientHistory'
import { Link } from 'react-router-dom'
import { contribute, resetContributionFeedback } from '../../store/actions/contributionsAction'
import CaseFeedBack from './CaseFeedBack'
import Contribution from './Contribution'


class Case extends Component {
    constructor(){
        super()
        this.state = {
            commentVisibility:"commentSection hide",
            comment:"",
            hasHistory:false
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
            let contribution = {
                caseId: cid,
                creator: uid,
                caption:this.state.comment,
                hasHistory:this.state.hasHistory,
                createdAt:new Date(),
                history:[]
            }
            this.props.contribute(contribution)
         }
    }

    render() {
        const { casefile, user } = this.props
        const author = user[0]
        if(this.props.contributionsFeed.match('show')){
            if(this.props.contributionsFeed.match('sent')){
                ReactDOM.findDOMNode(this).querySelectorAll('textarea')[0].value=""
                if(this.state.comment!==""){
                    this.setState({
                        comment:""
                    })
                }
            }
            setTimeout(() => {
                this.props.resetContributionFeedback()
            }, 3000)
        }
        // console.log(this.props.auth);
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
                        <Contribution 
                            casefile={casefile} 
                            author={author} 
                            auth={this.props.auth}
                            commentInput={this.commentInput}  
                            onHitEnter={this.onHitEnter} 
                            commentVisibility={this.state.commentVisibility}  
                        />
                    </div>
                </div>
                <CaseFeedBack type="comment" switch={this.props.contributionsFeed} />
            </>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        user:state.user.users.filter(user=>user.uid === props.casefile.creator),
        contributionsFeed:state.contributions.contributionFeed
    }
}

const mapDispatchToProps = {
    contribute,
    resetContributionFeedback
}

export default connect(mapStateToProps, mapDispatchToProps)(Case)
