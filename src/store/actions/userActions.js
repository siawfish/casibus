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