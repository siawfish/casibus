import React, { Component } from 'react'
import HomeShareCase from './HomeShareCase'
import Header from './Header'
import Case from './Case'
import { connect } from 'react-redux'
import { getCases } from '../../store/actions/caseActions'

class Interests extends Component {
    componentDidMount(){
        this.props.getCases()
    }
    render() {
        const { cases, match, location, uid } = this.props
        return (
            <>
                <Header uid={match.params.uid} loc={location} />
                <HomeShareCase uid={uid} />
                {
                    cases.map(obj=><Case auth={uid} casefile={obj} />)
                }
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        cases:state.cases.cases,
        uid:state.firebase.auth.uid
    }
}

const mapDispatchToProps = {
    getCases
}

export default connect(mapStateToProps, mapDispatchToProps)(Interests)