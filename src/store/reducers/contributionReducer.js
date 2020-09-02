let inistate = {
    contributionFeed:"",
    contributions:[]
}

export default function contributionReducer(state = inistate, action){
    switch(action.type){
        case "ContributionSuccess":
            return {
                ...state,
                contributionFeed:"show sent"
            }
        case "ContributionErr":
            console.log(action.err);
            return {
                ...state,
                contributionFeed:"show failed"
            }
        case "ResetContributionsFeedback":
            return {
                ...state,
                contributionFeed:""
            }
        default:
            return state
    }
}