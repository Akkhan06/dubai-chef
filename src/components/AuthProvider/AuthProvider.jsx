import React, { createContext, useEffect, useState } from 'react'
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../../firebase/firebase.config"
export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const [user, setUser] = useState(null)
    const [lodding, setLodding] = useState(false)

    const createUser = (email, password) => {
        setLodding(false)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLodding(false)
        return signInWithEmailAndPassword(auth, email, password)
    } 
    
    const githubUser = () => {
        setLodding(false)
       return signInWithPopup(auth, githubProvider)    
    }

    // const googleUser = () => {
    //     setLodding(true)
    // //   return  signInWithPopup(auth, googleProvider)    
    // }

    const logOut = () => {
        setLodding(false)
       return signOut(auth)
    }

    const updateUser = (name, image) => {
       return updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
          })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, userLogin => {
            setUser(userLogin)
            setLodding(true)
        })
        return () => unsubscribe()
    },[])

    const userInfo = {
        user,
        createUser,
        loginUser,
        githubUser,
        // googleUser,
        logOut,
        updateUser,
        lodding
    }
    
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;