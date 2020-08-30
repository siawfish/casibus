let inistate = {
    sendCaseFileStatus:"",
    cases:[]
}

export default function caseReducer(state = inistate, action){
    switch(action.type){
        case "CaseSent":
            return {
                ...state,
                sendCaseFileStatus:"show sent"
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