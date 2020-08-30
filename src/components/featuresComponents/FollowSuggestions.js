import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../../store/actions/userActions'
import SuggestionsTile from './SuggestionsTile'

class FollowSuggestions extends Component {
    componentDidMount(){
        this.props.getUsers()
    }
    render() {
        const { users, uid } = this.props
        const suggestions = users.filter(user=>uid!==user.uid)
        return (
            <div style={{marginTop:20}} className="rightCardsCon">
                <div className="header">
                    <h5>Follow suggestions</h5>
                </div>
                {
                    suggestions.length <1 ? <div style={{textAlign:"center", padding:20, fontSize:"small"}}>Sorry no sugguestions at the moment</div> : 
                    suggestions && suggestions.slice(0, 3).map(suggestion=><SuggestionsTile suggestion={suggestion}/>)
                }
                <div className="trendsShowMore">
                    Show more
                </div>
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users:state.user.users
    }
}

const mapDispatchToProps = {
    getUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(FollowSuggestions)
