export const getUser = (uid)=>{
    return async(dispatch, getState, { getFirestore, getFirebase }) => {
        const firestore = getFirestore ()
            await firestore.collection('users').doc(uid).onSnapshot((snapshot)=>{
            let user = snapshot.data()
            dispatch({
                type:'User',
                user:{
                    ...user,
                    uid
                }
            })
        })
    }
}

export const getUsers = () => {
    return async(dispatch, getState, { getFirestore, getFirebase }) => {
        const firestore = getFirestore ()
            await firestore.collection('users').onSnapshot((snapshot)=>{
            let users = snapshot.docs.map((doc)=>{
                return {
                    ...doc.data(),
                    uid:doc.id,
                }
            })
            dispatch({
                type:'AllUsers',
                users
            })
        })
    }
}

export const follow = (follower, following) => {
    return (
        (dispatch, getState, {getFirestore})=>{
            const firestore = getFirestore()
            firestore
            .collection("users")
            .doc(following)
            .update({
                followers:firestore.FieldValue.arrayUnion(follower)
            })
            .then(()=>{
                firestore
                .collection("users")
                .doc(follower)
                .update({
                    following:firestore.FieldValue.arrayUnion(following)
                })
                .then(()=>{
                    dispatch({
                       type:"ConnectionSuccess" 
                    })
                })
                .catch(err=>{
                    dispatch({
                        type:"ConnectionErr",
                        err:err.message
                    })
                })
            })
            .catch(err=>{
                dispatch({
                    type:"ConnectionErr",
                    err:err.message
                })
            })
        }
    )
}

export const unfollow = (unfollower, unfollowing) => {
    return(
        (dispatch, getState, {getFirestore})=>{
            const firestore = getFirestore()
            firestore
            .collection("users")
            .doc(unfollowing)
            .update({
                followers:firestore.FieldValue.arrayRemove(unfollower)
            })
            .then(()=>{
                firestore
                .collection("users")
                .doc(unfollower)
                .update({
                    following:firestore.FieldValue.arrayRemove(unfollowing)
                })
                .then(()=>{
                    dispatch({
                        type:"ConnectionSuccess"
                    })
                })
                .catch(err=>{
                    dispatch({
                        type:"ConnectionErr",
                        err:err.message
                    })
                })
            })
            .catch(err=>{
                dispatch({
                    type:"ConnectionErr",
                    err:err.message
                })
            })
        }
    )
}