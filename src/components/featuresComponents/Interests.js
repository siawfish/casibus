import React, { Component } from 'react'
import HomeShareCase from './HomeShareCase'
import Case from './Case'
import { connect } from 'react-redux'
import { getCases } from '../../store/actions/caseActions'

class Interests extends Component {
    componentDidMount(){
        this.props.getCases()
    }
    render() {
        const { cases } = this.props
        return (
            <>
                <HomeShareCase uid={this.props.uid} />
                {
                    cases.map(obj=><Case casefile={obj} />)
                }
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        cases:state.cases.cases
    }
}

const mapDispatchToProps = {
    getCases
}

export default connect(mapStateToProps, mapDispatchToProps)(Interests)