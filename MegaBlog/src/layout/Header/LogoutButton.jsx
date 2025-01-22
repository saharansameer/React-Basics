import React from 'react';
import authService from "../../appwrite/auth";
import {useDispatch} from "react-redux";
import {userLogout} from "../../features/auth/authSlice";
import { Button } from '../../components';
import { useNavigate } from 'react-router-dom';

function LogoutButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    authService.logout()
    .then(() => {
      dispatch(userLogout())
      navigate("/login");
    })
  };

  return (
    <Button 
    text={"Logout"} 
    className={'px-2 py-1 rounded-md'} 
    onClick={logoutHandler}
    />
  )
}

export default LogoutButton