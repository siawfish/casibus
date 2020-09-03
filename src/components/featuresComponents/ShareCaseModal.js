import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import { IoMdClose } from 'react-icons/io'
import avatar from '../../assets/images/avi.jpg'
import PatientHistoryCard from './PatientHistoryCard'
import { FaRegAddressCard, FaPhotoVideo } from 'react-icons/fa'
import CaseFeedBack from './CaseFeedBack'
import { connect } from 'react-redux'
import { resetCaseFeedback } from '../../store/actions/caseActions'
import { caseFile } from '../../store/actions/caseActions'


class ShareCaseModal extends Component {
    constructor(){
        super()
        this.state= {
            show:false,
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
            creator:this.props.uid,
            createdAt:new Date()
        }
        this.props.caseFile(caseFile)
    }

    handleClose = () => {
        this.setState({
            show:false
        })
    }

    show = () => {
        this.setState({
            show:true
        })
    }
    render() {
        if(this.props.caseFeedback.match('sent')){
            if(this.state.patientHistorySwitch){
                this.setState({
                    patientHistorySwitch:false
                })
            }            
            if(this.state.show){
                this.handleClose()
            }
        }
        return (
            <>
                <button onClick={this.show} className="btnFill">Post</button>
                <Modal className="shareCaseModal" show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header>
                        <button onClick={this.handleClose}><IoMdClose /></button>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="shareCaseCon">
                            <img src={avatar} alt="avatar"/>
                            <div className="shareCon">
                                <textarea name="msg" onChange={this.onMsgInput} type="text" placeholder="Share here..."/>
                                {
                                    this.state.patientHistorySwitch && <PatientHistoryCard onAddHistory={this.addPatientHistory} onRemove={this.togglePatientHistory}/>
                                }
                                <div className="postBtnsCon">
                                    <div className="leftBtns">
                                        <button><FaPhotoVideo /></button>
                                        <button onClick={this.togglePatientHistory}><FaRegAddressCard /></button>
                                    </div>
                                    <button onClick={this.onShare} className="btnFill">Share</button>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
                <CaseFeedBack switch={this.props.caseFeedback} />
            </>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        caseFeedback:state.cases.sendCaseFileStatus,
        uid:state.firebase.auth.uid
    }
}

const mapDispatchToProps = {
    caseFile,
    resetCaseFeedback
}

export default connect(mapStateToProps,mapDispatchToProps)(ShareCaseModal)
