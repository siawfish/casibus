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

export const contribute = (contribution) => {
    return (
        (dispatch, getState, {getFirestore})=>{
            const firestore = getFirestore()
            firestore
            .collection("CaseFiles")
            .doc(contribution.caseId)
            .update({
                contributions:firestore.FieldValue.arrayUnion(contribution)
            })
            .then(()=>{
                dispatch({
                    type:"ContributionSent"
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

export const resetContributionFeedback = () => {
    return(
        (dispatch)=>{
            dispatch({
                type:"ResetContributionFeedback"
            })
        }
    )
}

export const getCases = () => {
    return async(dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore ()
            await firestore.collection('CaseFiles').orderBy("createdAt", "desc").onSnapshot((snapshot)=>{
            let cases = snapshot.docs.map((doc)=>{
                return {
                    ...doc.data(),
                    cid:doc.id,
                }
            })
            dispatch({
                type:'Cases',
                cases
            })
        })
    }
}

