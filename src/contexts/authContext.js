import { createContext, useContext, React, useState, useEffect } from 'react'
import fire from '../fire'

export const contextAuth = createContext()

export const useAuth = ()=>{
    return useContext(contextAuth);
}

const ContextAuthProvider = ({children}) => {
const [users, setUsers] = useState({
    user: '',
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    hasAccount: '',

})

const inputsClear = () =>{
    setUsers(
        {...users, email: '', password: ''}
    )
}

const errorsClear = () =>{
    setUsers({...users, emailError: '', passwordError: ''})
}

const handleSignUp = () =>{
    errorsClear();
    fire.auth().createUserWithEmailAndPassword(users.email, users.password).catch((error)=>{
        switch(error.code){
            case "auth/email-already-in-use":
            case 'auth/invalid-email':
                setUsers({...users, emailError: error.message})
                break;
            case "auth/weak-password":
                setUsers({...users, passwordError: error.message});
                break;
        }
    });
}

const handleLogin = ()=>{
    errorsClear()
    fire.auth().signInWithEmailAndPassword(users.email, users.password).catch((error)=>{
        switch(error.code){
            case "auth/user-disabled":
            case "auth/invalid-email":
            case "auth/user-not-found":
                setUsers({...users, emailError: error.message})
                break;
            case "auth/wrong-password": 
            setUsers({...users, passwordError: error.message})
            break;    
        }
    })
}

const handleLogout = ()=>{
    fire.auth().signOut()
}


const listenAuth = ()=>{
    fire.auth().onAuthStateChanged((user)=>{
        if(user){
            inputsClear();
            setUsers({...users, user: user})

        }else{
            setUsers({...users, user: ''})
        }
    })
}


useEffect(()=>{
    listenAuth();
}, [])

const values = {
    users,

    setUsers,

    handleLogin,
    handleLogout,
    handleSignUp
}


return(
    <contextAuth.Provider value={values}>{children}</contextAuth.Provider>
)


}
export default ContextAuthProvider;