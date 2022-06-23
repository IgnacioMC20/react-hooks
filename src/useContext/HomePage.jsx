import React, { useContext, useState } from 'react'
import { UserContext } from './context/UserContext';

export const HomePage = () => {

    // ? desestructuramos la función para poder usarla
    const { setUser } = useContext(UserContext);

    return (
        <>
            <h2>HomePage</h2>
            <hr />

            <button aria-label='login' onClick={() => {
                setUser({
                    id: 1,
                    name: 'Ignacio',
                    lastname: 'Martínez',
                })
            }}>Login</button>
        </>
    )
}
