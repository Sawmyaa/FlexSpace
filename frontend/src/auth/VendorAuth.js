import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const VendorAuth = ({children}) => {
  
    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('vendor')));

    
    if(currentUser!==null){
        return children;
    }
    else{
        Swal.fire({
            icon: 'error',
            title : 'Error',
            text: 'Please Login First!!',
        })
        // store the current address in the session storage
        return <Navigate to="/main/vlogin" />
    }
}

export default VendorAuth;