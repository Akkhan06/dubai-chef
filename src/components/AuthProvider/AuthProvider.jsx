import React, { createContext, useEffect } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../../firebase/firebase.config"
export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const user = {
        name: "afsar Khan"
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    } 
    
    useEffect(() => {

    },[])

    const userInfo = {
        user,
        createUser,
        loginUser
    }
    
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;