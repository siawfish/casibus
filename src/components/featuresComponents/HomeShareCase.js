import React, { Component } from 'react'
import { FaRegAddressCard, FaPhotoVideo } from 'react-icons/fa'
import avi from '../../assets/images/avi.jpg'


export default class HomeShareCase extends Component {
    render() {
        return (
            <div className="homePostCon">
                <div className="avatarCon">
                    <img src={avi} alt="avatar"/>
                </div>
                <div className="inputCol">
                    <textarea type="text" placeholder="Share here..."/>
                    <div className="postBtnsCon">
                        <div className="leftBtns">
                            <span><FaPhotoVideo /></span>
                            <span><FaRegAddressCard /></span>
                        </div>
                        <button className="btnFill">Share</button>
                    </div>
                </div>
            </div>
        )
    }
}
