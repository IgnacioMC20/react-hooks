import React, { useContext, useState } from 'react'
import { UserContext } from './context/UserContext';

export const HomePage = () => {

    // ? desestructuramos la función para poder usarla
    const { setUser } = useContext(UserContext);

    return (
        <>
            <h2>Home</h2>
            <hr />

            <button onClick={() => {
                setUser({
                    id: 1,
                    name: 'Ignacio',
                    lastname: 'Martínez',
                })
            }}>Login</button>
        </>
    )
}
