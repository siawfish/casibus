export const contribute = (contribution) => {
    return (
        (dispatch, getState, {getFirestore})=>{
            const firestore = getFirestore()
            firestore
            .collection("Contributions")
            .doc()
            .set(contribution)
            .then(()=>{
                dispatch({
                    type:"ContributionSuccess"
                })
            })
            .catch(err=>{
                dispatch({
                    type:"ContributionErr",
                    err:err.message
                })
            })
        }
    )
}

export const resetContributionFeedback = () => {
    return(
        (dispatch)=>{
            dispatch({
                type:"ResetContributionsFeedback"
            })
        }
    )
}