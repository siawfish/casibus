import React, { Component } from 'react'
import { FaRegAddressCard, FaPhotoVideo } from 'react-icons/fa'
import avi from '../../assets/images/avi.jpg'


export default class HomeShareCase extends Component {
    constructor(){
        super()
        this.state = {
            msg:''
        }
    }

    onMsgInput = (e) => {
        let nam = e.target.name;
        let val = e.target.value;
        this.setState({[nam]: val});
    }

    onShare = (e) => {
        e.preventDefault()
        console.log(this.state.msg);
    }

    render() {
        return (
            <div className="homePostCon">
                <div className="avatarCon">
                    <img src={avi} alt="avatar"/>
                </div>
                <div className="inputCol">
                    <textarea name="msg" onChange={this.onMsgInput} type="text" placeholder="Share here..."/>
                    <div className="postBtnsCon">
                        <div className="leftBtns">
                            <span><FaPhotoVideo /></span>
                            <span><FaRegAddressCard /></span>
                        </div>
                        <button onClick={this.onShare} className="btnFill">Share</button>
                    </div>
                </div>
            </div>
        )
    }
}
