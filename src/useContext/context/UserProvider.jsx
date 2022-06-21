import React, { useState } from 'react'
import { UserContext } from './UserContext'

export const UserProvider = ( { children } ) => {

    // const user = {
    //     id: 1,
    //     name: 'Ignacio',
    //     lastname: 'Martínez',
    // }

    const [user, setUser] = useState({});

    // ? creamos un estado para el usuario y lo mandamos al Context para poderlo usar en otros componentes 

  return (
    // ? Componente.Provider para poder usar el contexto
    <UserContext.Provider value={ {user, setUser} }>
        { children }
    </UserContext.Provider>
  )
}
