let inistate = {
    sendCaseFileStatus:"",
    sendContributionStatus:"",
    cases:[]
}

export default function caseReducer(state = inistate, action){
    switch(action.type){
        case "CaseSent":
            return {
                ...state,
                sendCaseFileStatus:"show sent"
            }
        case "ContributionSent":
            return {
                ...state,
                sendContributionStatus:"show sent"
            }
        case "CaseErr":
            console.log(action.err);
            return {
                ...state,
                sendCaseFileStatus:"show failed"
            }
        case "ResetCaseFeedback":
            return {
                ...state,
                sendCaseFileStatus:"",
                sendContributionStatus:""
            }
        case "ResetContributionFeedback":
            return {
                ...state,
                sendContributionStatus:"",
                sendCaseFileStatus:""
            }
        case "Cases": {
            return {
                ...state,
                cases:action.cases
            }
        }
        default:
            return state
    }
}