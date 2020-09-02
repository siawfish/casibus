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

export const getContributions = (cid) => {
    return async(dispatch, getState, {getFirestore})=>{
        const firestore = getFirestore()
        await firestore
        .collection("Contributions")
        .orderBy("createdAt")
        .onSnapshot((snapshot)=>{
            let contributions = snapshot.docs.map(doc=>{
                return {
                    ...doc.data(),
                    cid
                }
            })
            dispatch({
                type:'Contributions',
                contributions
            })
        })
    }
}