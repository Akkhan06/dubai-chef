import React, { createContext, useEffect, useState } from 'react'
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.config"
export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const [user, setUser] = useState('')

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    } 
    
    const githubUser = () => {
        signInWithPopup(auth, githubProvider)
        .then(result => {
            const user = result.user
            setUser(user)
            console.log(user)
        })
        .catch(error => {
            console.log(error.massage)
        })
        
    }

    const googleUser = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user
            setUser(user)
            console.log(user)
        })
        .catch(error => {
            console.log(error.massage)
        })    
    }

    const logOut = () => {
        signOut(auth)
        .then(result => {
            setUser('')
        }).catch(error => {})
    }

    useEffect(() => {

    },[])

    const userInfo = {
        user,
        createUser,
        loginUser,
        githubUser,
        googleUser,
        logOut
    }
    
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;