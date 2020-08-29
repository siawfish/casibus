export const caseFile = (caseFile) => {
    return (
        (dispatch, getState, {getFirestore})=>{
            const firestore = getFirestore()
            firestore
            .collection("CaseFiles")
            .doc()
            .set(caseFile)
            .then(()=>{
                dispatch({
                    type:"CaseSent"
                })
            })
            .catch(err=>{
                dispatch({
                    type:"CaseErr",
                    err:err.message
                })
            })
        }
    )
}

export const resetCaseFeedback = () => {
    return(
        (dispatch)=>{
            dispatch({
                type:"ResetCaseFeedback"
            })
        }
    )
}