import React, { Component } from 'react'
import { FaRegAddressCard, FaPhotoVideo } from 'react-icons/fa'
import ContributionsDisplay from './ContributionsDisplay'
import avi from '../../assets/images/avi.jpg'


export default class Contribution extends Component {
    render() {
        return (
            <div className={this.props.commentVisibility}>
                <div className="commentDisplayCon">
                    <ContributionsDisplay />
                </div>
                <div className="commentForm">
                    <div className="commentAvatarCon">
                        <img src={avi} alt="avatar"/>
                    </div>
                    <textarea rows="1" onKeyDown={(e)=>this.props.onHitEnter(e, this.props.casefile.cid, this.props.author.uid)} onChange={this.props.commentInput} type="text" placeholder="Enter contribution here..."></textarea>
                    <span>Hit enter to send contribution</span>
                    <div className="additionalInfo">
                        <FaPhotoVideo />
                        <FaRegAddressCard />
                    </div>
                </div>
            </div>
        )
    }
}
