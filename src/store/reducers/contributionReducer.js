let inistate = {
    contributionFeed:""
}

export default function contributionReducer(state = inistate, action){
    switch(action.type){
        case "ContributionSuccess":
            return {
                contributionFeed:"show sent"
            }
        case "ContributionErr":
            console.log(action.err);
            return {
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