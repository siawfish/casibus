import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Modal } from 'react-bootstrap'
import { IoMdClose } from 'react-icons/io'
import avatar from '../../assets/images/avi.jpg'
import { FaRegAddressCard, FaPhotoVideo } from 'react-icons/fa'


export default class ShareCaseModal extends Component {
    constructor(){
        super()
        this.state= {
            show:false
        }
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

    feedback = () => {
        var textarea = ReactDOM.findDOMNode(this).nextSibling
        // Add the "show" class to DIV
        textarea.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function(){ textarea.className = textarea.className.replace("show", ""); }, 3000);
    }
    render() {
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
                                <textarea  placeholder="Share here..." />
                                <div className="postBtnsCon">
                                    <div className="leftBtns">
                                        <span><FaPhotoVideo /></span>
                                        <span><FaRegAddressCard /></span>
                                    </div>
                                    <button className="btnFill">Share</button>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
                <div id="snackbar">Some text some message..</div>
            </>
        )
    }
}
