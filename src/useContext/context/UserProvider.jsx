import React, { useState } from 'react'
import { UserContext } from './UserContext'

export const UserProvider = ( { children } ) => {

    // const user = {
    //     id: 1,
    //     name: 'Ignacio',
    //     lastname: 'Martínez',
    // }

    const [user, setUser] = useState({});


  return (
    <UserContext.Provider value={ {user, setUser} }>
        { children }
    </UserContext.Provider>
  )
}
