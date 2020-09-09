import firebase from '../../config/fbConfig'

export const caseFile = (caseFile, media) => {
    return (
        (dispatch, getState, {getFirestore})=>{
            const firestore = getFirestore()
            const doc = firestore.collection("CaseFiles").doc()
            doc.set(caseFile)
            .then(()=>{
                if(caseFile.hasMedia){
                    media.forEach((media, i)=>{
                        firebase
                        .storage()
                        .ref("casefileMedia/"+doc.id+"/"+media.name)
                        .put(media)
                        if(i===media.length-1){
                            dispatch({
                                type:"CaseSent"
                            })
                        }
                    })
                }
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

// export const uploadCasesMedia = (cid, media) => {
//     return(
//         (dispatch, getState)=> {
//             media.forEach((media, i)=>{
//                 console.log(cid);
//                 firebase
//                 .storage()
//                 .ref("casefileMedia/"+cid+"/"+media.name)
//                 .put(media)
//                 .then(()=>{
//                     console.log("here");
//                     dispatch({
//                         type:"CaseSent"
//                     })
//                 })
//                 .catch(err=>{
//                     console.log(err.message);
//                 })
//             })
//         }
//     )
// }

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

export const reshare = (cid, aid) => {
    return (
        (dispatch, getState, {getFirestore})=>{
            const firestore = getFirestore()
            firestore
            .collection("CaseFiles")
            .doc(cid)
            .update({
                reshares:firestore.FieldValue.arrayUnion(aid)
            })
            .then(()=>{
                dispatch({
                    type:"Reshared"
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

export const unReshare = (cid, aid) => {
    return (
        (dispatch, getState, {getFirestore})=>{
            const firestore = getFirestore()
            firestore
            .collection("CaseFiles")
            .doc(cid)
            .update({
                reshares:firestore.FieldValue.arrayRemove(aid)
            })
            .then(()=>{
                dispatch({
                    type:"Reshared"
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

export const cosign = (cid, aid) => {
    return (
        (dispatch, getState, {getFirestore})=>{
            const firestore = getFirestore()
            firestore
            .collection("CaseFiles")
            .doc(cid)
            .update({
                cosigns:firestore.FieldValue.arrayUnion(aid)
            })
            .then(()=>{
                dispatch({
                    type:"Cosigned"
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

export const unCosign = (cid, aid) => {
    return (
        (dispatch, getState, {getFirestore})=>{
            const firestore = getFirestore()
            firestore
            .collection("CaseFiles")
            .doc(cid)
            .update({
                cosigns:firestore.FieldValue.arrayRemove(aid)
            })
            .then(()=>{
                dispatch({
                    type:"Cosigned"
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

