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
        const { cases, match, location, uid, user } = this.props
        let casefiles = []
        if(user.uid){
            const followingFilteredCases = cases.filter(casefile=>user.following.includes(casefile.creator))
            const selfFilteredCases = cases.filter(casefile=>casefile.creator===user.uid)
            // const cosignedFilteredCases = cases.filter(casefile=>{
            //     return user.following.forEach((following, i)=>{
            //         cases.cosigns.includes(following)
            //     })
            // })
            // const resharededFilteredCases = cases.filter(casefile=>{
            //     return user.following.forEach(following=>casefile.reshares.includes(following))
            // })
            casefiles = [...followingFilteredCases, ...selfFilteredCases]
        }
        const sortedCasefiles = casefiles.sort((a,b)=>b.createdAt - a.createdAt)
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
        user:state.user.user
    }
}

const mapDispatchToProps = {
    getCases,
    getUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Interests)