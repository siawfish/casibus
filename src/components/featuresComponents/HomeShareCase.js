import React, { Component } from 'react'
import { FaRegAddressCard, FaPhotoVideo } from 'react-icons/fa'
import avi from '../../assets/images/avi.jpg'
import PatientHistoryCard from './PatientHistoryCard'


export default class HomeShareCase extends Component {
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
        console.log(this.state);
    }

    render() {
        return (
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
        )
    }
}
