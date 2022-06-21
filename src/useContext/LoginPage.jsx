import React, { useContext } from 'react'
import { UserContext } from './context/UserContext';

export const LoginPage = () => {

    const { user } = useContext(UserContext);
    console.log(user);

  return (
    <>
        <h2>Login</h2>
        <hr />   
        <p>{ user?.name }</p>
    </>
  )
}
