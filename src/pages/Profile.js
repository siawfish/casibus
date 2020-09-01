import React, { Component } from 'react'
import Case from '../components/featuresComponents/Case'
import Propic from '../components/featuresComponents/Propic'
import Header from '../components/featuresComponents/Header'
import Bio from '../components/featuresComponents/Bio'
import { connect } from 'react-redux'
import { getUser } from '../store/actions/userActions'
import { getCases } from '../store/actions/caseActions'

class Profile extends Component {
    componentDidMount(){
        const id = this.props.match.params.uid
        this.props.getUser(id)
        this.props.getCases()
    }
    render() {
        return (
           <>
                <Header uid={this.props.match.params.uid} loc={this.props.location} />
                <div className="profile">
                    <div className="proBanner">
                        <Propic />
                        <Bio user={this.props.user} authId={this.props.auth} />
                        <div className="tabs">
                            <span className="active">Cases</span>
                            <span>Cosigns</span>
                            <span>Bookmarks</span>
                        </div>
                        <div className="tabsContent">
                            {
                                this.props.cases.map(obj=><Case casefile={obj} />)
                            }
                        </div>
                    </div>
                </div>
           </>
        )
    }
}


const mapStateToProps = (state, props) => {
    return {
        user:state.user.user,
        auth:state.firebase.auth.uid,
        cases:state.cases.cases.filter(casefile=>casefile.creator === props.match.params.uid)
    }
}

const mapDispatchToProps = {
    getUser,
    getCases
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
