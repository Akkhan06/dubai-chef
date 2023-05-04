import React, { createContext, useEffect, useState } from 'react'
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../../firebase/firebase.config"
export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider()
    

    const [user, setUser] = useState(null)

    const [lodding, setLoding] = useState(true)

    const createUser = (email, password) => {
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, password)
    } 
    

    const logOut = () => {
        setLoding(true)
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
            setLoding(false)
        })
        return () => unsubscribe()
    },[])

    const userInfo = {
        user,
        createUser,
        loginUser,
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