import React, { useContext } from 'react'
import { UserContext } from './context/UserContext';

export const LoginPage = () => {

    // ? desestructuramos el usuario para poder usarlo
    const { user } = useContext(UserContext);
    // console.log(user);

  return (
    <>
        <h2>LoginPage</h2>
        <hr />   
        <p aria-label='pre'>{ user?.name }</p>
    </>
  )
}
