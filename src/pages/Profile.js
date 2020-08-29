import React, { Component } from 'react'
import Case from '../components/featuresComponents/Case'
import Propic from '../components/featuresComponents/Propic'
import Bio from '../components/featuresComponents/Bio'
import { connect } from 'react-redux'
import { getUser } from '../store/actions/userActions'

class Profile extends Component {
    componentDidMount(){
        const id = this.props.match.params.uid
        this.props.getUser(id)
    }
    render() {
        return (
           <>
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
                            <Case />
                            <Case />
                        </div>
                    </div>
                </div>
           </>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        user:state.user.user,
        auth:state.firebase.auth.uid
    }
}

const mapDispatchToProps = {
    getUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
