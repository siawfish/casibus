let inistate = {
    sendCaseFileStatus:""
}

export default function caseReducer(state = inistate, action){
    switch(action.type){
        case "CaseSent":
            return {
                sendCaseFileStatus:"show sent"
            }
        case "CaseErr":
            console.log(action.err);
            return {
                sendCaseFileStatus:"show failed"
            }
        case "ResetCaseFeedback":
            return {
                sendCaseFileStatus:""
            }
        default:
            return state
    }
}