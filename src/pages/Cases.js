import React, { Component } from 'react'
import Header from '../components/featuresComponents/Header'
import { connect } from 'react-redux'
import { getCases } from '../store/actions/caseActions'
import Case from '../components/featuresComponents/Case'

class Cases extends Component {
    componentDidMount(){
        this.props.getCases()
    }
    render() {
        return (
            <>
                <Header uid={this.props.match.params.uid} loc={this.props.location} />
                {
                    this.props.casefiles && this.props.casefiles.map(casefile=><Case casefile={casefile} auth={this.props.auth} />)
                }
            </>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        casefiles:state.cases.cases,
        auth:state.firebase.auth.uid
    }
}

const mapDispatchToProps = {
    getCases
}

export default connect(mapStateToProps, mapDispatchToProps)(Cases)
