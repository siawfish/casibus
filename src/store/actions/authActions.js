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
                        type:'Registered',
                        user
                    })
                })
                .catch((err)=>{
                    dispatch({
                        type: 'Register_Err',
                        err
                    })
                })
            })
        }
    )
}