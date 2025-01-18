import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function AuthLayout({children, authentication}) {
    const navigate = useNavigate();
    const authStatus = useSelector((state) => state.auth.status);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        if (authStatus) {
            navigate("/");
        } else if (!authStatus) {
            navigate("/login");
        }
        setLoader(false);
    }, 
    [authStatus, navigate]);

  return loader ? (<h1>Please Wait...</h1>) : (<>{children}</>);
}

export default AuthLayout;