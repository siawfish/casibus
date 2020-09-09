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
            media:[]
        }
        this.reader = React.createRef()
    }

    uploadMultipleFiles = (e) => {
        const fileObj = e.target.files
        let filesArray = []
        for (let i = 0; i < fileObj.length; i++) {
            if(fileObj[i].type.match("image/") || fileObj[i].type.match("video/")){
                filesArray.push(fileObj[i])
            }
        }
        this.setState({
            media:filesArray
        })
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

    toggleFileReader = () => {
        this.reader.current.click()
    }

    onShare = (e) => {
        e.preventDefault()
        const mediaNames = []
        this.state.media.forEach(media=> mediaNames.push(media.name))
        let caseFile = {
            caption:this.state.msg,
            history:this.state.patientHistory,
            hasHistory:this.state.patientHistorySwitch,
            creator:this.props.uid,
            createdAt:new Date(),
            contributions:[],
            reshares:[],
            cosigns:[],
            hasMedia:this.state.media.length>=1 ? true : false,
            media:mediaNames
        }
        this.props.caseFile(caseFile, this.state.media)
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
                if(this.state.media.length>=1){
                    this.setState({
                        media:[]
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
                        {
                            this.state.media.length >= 1 ? <div className="caseMedia">
                                {
                                    this.state.media.map(media=><img width={80} height={80} src={URL.createObjectURL(media)} alt=""/>)
                                }
                            </div> : null
                        }
                        <div className="postBtnsCon">
                            <div className="leftBtns">
                                <input onChange={this.uploadMultipleFiles} ref={this.reader} type="file" multiple hidden />
                                <button onClick={this.toggleFileReader}><FaPhotoVideo /></button>
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
        caseFeedback:state.cases.sendCaseFileStatus
    }
}

const mapDispatchToProps = {
    caseFile,
    resetCaseFeedback
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeShareCase)
