import React, { Component } from 'react'
import ReactDOM from 'react-dom' 
import { FaRegAddressCard, FaPhotoVideo } from 'react-icons/fa'
import avi from '../../assets/images/avi.jpg'
import PatientHistoryCard from './PatientHistoryCard'
import { connect } from 'react-redux'
import { caseFile } from '../../store/actions/caseActions'
import CaseFeedBack from './CaseFeedBack'
import { resetCaseFeedback } from '../../store/actions/caseActions'


class HomeShareCase extends Component {
    constructor(){
        super()
        this.state = {
            msg:'',
            patientHistorySwitch:false,
            patientHistory: [],
        }
    }
    
    togglePatientHistory = () => {
        if(this.state.patientHistorySwitch){
            this.setState({
                patientHistorySwitch:false,
            })
            return
        }
        this.setState({
            patientHistorySwitch:true,
        })
    }

    addPatientHistory = (history) => {
        this.setState({
            patientHistory: history
        })
    }

    onMsgInput = (e) => {
        this.autoResize(e)
        let nam = e.target.name;
        let val = e.target.value;
        this.setState({[nam]: val});
    }

    autoResize = (e) => { 
        e.target.style.height = 'auto'; 
        e.target.style.height = e.target.scrollHeight + 'px'; 
    }

    onShare = (e) => {
        e.preventDefault()
        let caseFile = {
            caption:this.state.msg,
            history:this.state.patientHistory,
            hasHistory:this.state.patientHistorySwitch,
            creator:this.props.uid
        }
        this.props.caseFile(caseFile)
    }

    render() {
        if(this.props.caseFeedback.match('show')){
            if(this.props.caseFeedback.match('sent')){
                ReactDOM.findDOMNode(this).querySelectorAll('textarea')[0].value=""
                if(this.state.patientHistorySwitch){
                    this.setState({
                        patientHistorySwitch:false
                    })
                }
            }
            setTimeout(() => {
                this.props.resetCaseFeedback()
            }, 3000)
        }
        return (
            <>
                <div className="homePostCon">
                    <div className="avatarCon">
                        <img src={avi} alt="avatar"/>
                    </div>
                    <div className="inputCol">
                        <textarea name="msg" onChange={this.onMsgInput} type="text" placeholder="Share here..."/>
                        {
                            this.state.patientHistorySwitch && <PatientHistoryCard onAddHistory={this.addPatientHistory} onRemove={this.togglePatientHistory}/>
                        }
                        <div className="postBtnsCon">
                            <div className="leftBtns">
                                <button><FaPhotoVideo /></button>
                                <button onClick={this.togglePatientHistory}><FaRegAddressCard /></button>
                            </div>
                            <div className="shareBtnCon">
                                <label className="anon">Anon: </label>
                                <label className="switch">
                                    <input type="checkbox" />
                                    <span className="slider round"></span>
                                </label>
                                <button onClick={this.onShare} className="btnFill">Share</button>
                            </div>
                        </div>
                    </div>
                </div>
                <CaseFeedBack switch={this.props.caseFeedback} />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        caseFeedback:state.caseFeed.sendCaseFileStatus
    }
}

const mapDispatchToProps = {
    caseFile,
    resetCaseFeedback
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeShareCase)
