export const register = (user) => {
    return(
        (dispatch, getState, { getFirestore, getFirebase })=> {
            const firestore = getFirestore()
            const firebase = getFirebase()
            firebase
            .auth()
            .createUserWithEmailAndPassword(user.email, user.pass)
            .then((res)=>{
                firestore
                .collection('users')
                .doc(res.user.uid)
                .set(user)
                .then(()=>{
                    dispatch({
                        type:'AuthSuccess',
                    })
                })
                .catch((err)=>{
                    dispatch({
                        type: 'AuthErr',
                        err:err.message
                    })
                })
            })
        }
    )
}

export const signOut = () => {
    return(dispatch, getState, {getFirebase}) => {
        let firebase = getFirebase()
        firebase
        .auth()
        .signOut()
        .then(()=>{
            dispatch({
                type:"SignedOut"
            })
        }).catch((err)=>{
            alert('error occurred', err)
        })
    }
}

export const signIn = (cred) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()
        firebase
        .auth()
        .signInWithEmailAndPassword(cred.email, cred.pass)
        .then(()=>{
            dispatch({
                type:"AuthSuccess"
            })
        })
        .catch((err)=>{
            dispatch({
                type:"AuthErr",
                err: err.message
            })
        })
    }
}