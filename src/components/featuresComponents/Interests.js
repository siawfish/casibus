import React, { Component } from 'react'
import HomeShareCase from './HomeShareCase'
import Header from './Header'
import Case from './Case'
import { connect } from 'react-redux'
import { getCases } from '../../store/actions/caseActions'
import { getUser } from '../../store/actions/userActions'
import ZeroCases from './ZeroCases'

class Interests extends Component {
    componentDidMount(){
        this.props.getCases()
        this.props.uid && this.props.getUser(this.props.uid)
    }
    render() {
        const { cases, match, location, uid, user, allusers } = this.props
        let casefiles = []
        const institutionUsers  = allusers.filter(insUser=>insUser.institution === user.institution)
        const institutionUsersUids = []
        institutionUsers.forEach(user=> institutionUsersUids.push(user.uid))
        if(user.uid){
            const followingFilteredCases = cases.filter(casefile=>user.following.includes(casefile.creator))
            const selfFilteredCases = cases.filter(casefile=>casefile.creator===user.uid)
            const institutionCases = cases.filter(casefile=>institutionUsersUids.includes(casefile.creator))
            console.log("following cases", followingFilteredCases);
            console.log("self cases", selfFilteredCases);
            console.log("institution cases", institutionCases);
            casefiles = [...followingFilteredCases, ...selfFilteredCases, ...institutionCases]
        }
        const sortedCasefilesSorted = casefiles.sort((a,b)=>b.createdAt - a.createdAt)
        const sortedCasefiles = Array.from(new Set(sortedCasefilesSorted))
        return (
            <>
                <Header uid={match.params.uid} loc={location} />
                <HomeShareCase uid={uid} />
                {
                    sortedCasefiles.length < 1 ? <ZeroCases />:
                    sortedCasefiles.map(obj=><Case auth={uid} casefile={obj} />)
                }
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        cases:state.cases.cases,
        uid:state.firebase.auth.uid,
        user:state.user.user,
        allusers:state.user.users
    }
}

const mapDispatchToProps = {
    getCases,
    getUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Interests)