import React, { Component } from 'react'
import { FaRegAddressCard, FaPhotoVideo } from 'react-icons/fa'
import ContributionsDisplay from './ContributionsDisplay'
import avi from '../../assets/images/avi.jpg'
import { connect } from 'react-redux'
import { getContributions } from '../../store/actions/contributionsAction'

class Contribution extends Component {

    componentDidMount(){
        this.props.getContributions(this.props.casefile.cid)
        
    }

    render() {
        if(this.props.contributions.length >= 1){
            this.props.commentCount(this.props.contributions.length)
        }
        return (
            <div className={this.props.commentVisibility}>
                {
                    this.props.contributions.length >= 1 ?
                    <>
                    <div className="commentDisplayCon">
                        {
                            this.props.contributions && this.props.contributions.map(contribution=><ContributionsDisplay contribution={contribution} />)
                        }
                    </div></> : null
                }
                <div className="commentForm">
                    <div className="commentAvatarCon">
                        <img src={avi} alt="avatar"/>
                    </div>
                    <textarea rows="1" onKeyDown={(e)=>this.props.onHitEnter(e, this.props.casefile.cid, this.props.auth)} onChange={this.props.commentInput} type="text" placeholder="Enter contribution here..."></textarea>
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

const mapStateToProps = (state, props) => {
    return {
        contributions:state.contributions.contributions.filter(contribution=>contribution.caseId===props.casefile.cid)
    }
}

const mapDispatchToProps = {
    getContributions
}

export default connect(mapStateToProps, mapDispatchToProps)(Contribution)
