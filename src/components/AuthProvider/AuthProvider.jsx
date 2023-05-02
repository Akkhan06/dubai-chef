import React, { createContext } from 'react';
export const AuthContext = createContext(null)

const AuthProvider = () => {

    const userInfo = {

    }
    
    return (
        <AuthContext.Provider value={userInfo}>
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;