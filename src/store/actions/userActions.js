export const getUser = (uid)=>{
    return (dispatch, getState, {getFirestore, getFirebase}) => {
        const firestore = getFirestore()
        firestore
        .collection('users')
        .doc(uid)
        .get()
        .then((res)=>{
            dispatch({
                type: 'User', 
                user: {
                    ...res.data(),
                    uid
                }
            })
        }).catch((err)=>{
            dispatch({
                type: 'UserErr', 
                err:err.message
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
                .collection("user")
                .doc(follower)
                .update({
                    following:firestore.FieldValue.arrayUnion(following)
                })
                .then(()=>{
                    dispatch({
                       type:"Followed" 
                    })
                })
                .catch(err=>{
                    dispatch({
                        type:"FollowErr",
                        err:err.message
                    })
                })
            })
            .catch(err=>{
                dispatch({
                    type:"FollowErr",
                    err:err.message
                })
            })
        }
    )
}
