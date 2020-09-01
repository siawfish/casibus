let inistate = {
    contributionFeed:""
}

export default function contributionReducer(state = inistate, action){
    switch(action.type){
        case "ContributionSuccess":
            return state
        case "ContributionErr":
            return state
        default:
            return state
    }
}