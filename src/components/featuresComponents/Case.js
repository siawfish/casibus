import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {  FaSignature } from 'react-icons/fa'
import { GoComment } from 'react-icons/go'
import { RiShareForwardBoxLine } from 'react-icons/ri'
import avi from '../../assets/images/avi.jpg'
import { connect } from 'react-redux'
import moment from 'moment'
import DisplayPatientHistory from './DisplayPatientHistory'
import { Link } from 'react-router-dom'
import { contribute, resetContributionFeedback, reshare, unReshare, cosign, unCosign } from '../../store/actions/caseActions'
import ContributionFeedback from './ContributionFeedback'
import Contribution from './Contribution'
import firebase from '../../config/fbConfig'


class Case extends Component {
    constructor(){
        super()
        this.state = {
            commentVisibility:"commentSection hide",
            comment:"",
            hasHistory:false,
            mediaFiles:[]
        }
    }

    componentDidMount(){
        const storage = firebase.storage()
        const { casefile } = this.props
        if(casefile.media && casefile.media.length>=1){
            casefile.media.forEach(media=>
                storage.ref("casefileMedia/"+casefile.cid+"/"+media)
                .getDownloadURL()
                .then(url=>{
                    this.setState({
                        mediaFiles:[url]
                    })
                })
                .catch(err=>{
                    console.log(err.message);
                })
            )
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

    reshare = () => {
        if(this.props.casefile.reshares.includes(this.props.auth)){
            this.props.unReshare(this.props.casefile.cid, this.props.auth)
            return
        }
        this.props.reshare(this.props.casefile.cid, this.props.auth)
    }

    cosign = () => {
        if(this.props.casefile.cosigns.includes(this.props.auth)){
            this.props.unCosign(this.props.casefile.cid, this.props.auth)
            return
        }
        this.props.cosign(this.props.casefile.cid, this.props.auth)
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
        if(this.props.contributionsFeedback.match('show')){
            if(this.props.contributionsFeedback.match('sent')){
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
                        {
                            this.state.mediaFiles.length>=1 &&
                            <div className="caseMedia">
                                {
                                    this.state.mediaFiles.map(mediaFile=>
                                        <img src={mediaFile} alt="" />
                                    ) 
                                }
                            </div> 
                        }
                        {
                             casefile.hasHistory ? <DisplayPatientHistory history={casefile.history} /> : null
                        }
                        <div className="actionBtns">
                            <div className="btnRow">
                                <button onClick={this.toggleCommentVisibility}><GoComment /></button><small>{casefile.contributions.length}</small>
                            </div>
                            <div className="btnRow">
                                <button className={casefile.reshares.includes(this.props.auth) ? "highlight" : null} onClick={this.reshare}><RiShareForwardBoxLine /></button><small>{casefile.reshares.length}</small>
                            </div>
                            <div className="btnRow">
                                <button className={casefile.cosigns.includes(this.props.auth) ? "highlight" : null} onClick={this.cosign}><FaSignature /></button><small>{casefile.cosigns.length}</small>
                            </div>
                        </div>
                        <Contribution 
                            casefile={casefile} 
                            author={author} 
                            auth={this.props.auth}
                            commentInput={this.commentInput}  
                            onHitEnter={this.onHitEnter} 
                            commentVisibility={this.state.commentVisibility}
                            contributionsFeedback={this.props.contributionsFeedback}
                        />
                    </div>
                </div>
                <ContributionFeedback switch={this.props.contributionsFeedback} />
            </>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        user:state.user.users.filter(user=>user.uid === props.casefile.creator),
        contributionsFeedback:state.cases.sendContributionStatus,
        media:state.cases.media
    }
}

const mapDispatchToProps = {
    contribute,
    resetContributionFeedback,
    reshare,
    unReshare,
    cosign,
    unCosign
}

export default connect(mapStateToProps, mapDispatchToProps)(Case)
