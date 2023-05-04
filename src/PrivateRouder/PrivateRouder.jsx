import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../components/AuthProvider/AuthProvider';

const PrivateRouder = ({children}) => {
    const {user, lodding} = useContext(AuthContext)

    if(!lodding) {
        return <h1>lodding...</h1>
    }

    if(user){
        return children
    }
    
    const location = useLocation()
    console.log(location)

    return <Navigate replace  /* MUST USE THIS STACTURE FOR TARGETED LOCATION**/ state={{from: location}}/** */  to='/login'>
            
        </Navigate>
    ;
};

export default PrivateRouder;