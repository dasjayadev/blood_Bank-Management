import React, { useEffect } from 'react';
import API from '../../services/API';
import store from '../../redux/store';
import { getCurrentUser } from '../../redux/features/auth/authAction';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
    async function getCurrentUserHandler (){
        try {
            let  res = await API.get("/auth/v1/current-user")
            if(res.data){
                // console.log(res.data)
                store.dispatch(getCurrentUser(res))
            }
        } catch (error) {
            console.log(error)
            localStorage.clear("blood-token")
        }
    }
  useEffect(() => {
    getCurrentUserHandler()
  }, [])
  if(localStorage.getItem("blood-token")){
    return children
  }
  else{
    <Navigate to = "/login" />
  }
}

export default PrivateRoute;
