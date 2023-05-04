import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../components/AuthProvider/AuthProvider';
import LoadingSpinner from '../Lodding';

const PrivateRouder = ({children}) => {
    const {user, lodding} = useContext(AuthContext)
    const location = useLocation()

    console.log(lodding)

    if(lodding) {
        return <LoadingSpinner></LoadingSpinner>
    }

    if(user){
        return children
    }
      console.log(location)

    return <Navigate replace  /* MUST USE THIS STACTURE FOR TARGETED LOCATION**/ state={{from: location}}/** */  to='/login'>

        </Navigate>
    ;
};

export default PrivateRouder;