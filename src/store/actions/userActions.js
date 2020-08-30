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