import React from 'react'

import {
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import { AboutPage } from './AboutPage';
import { UserProvider } from './context/UserProvider';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { NavBar } from './NavBar';

export const MainApp = () => {
    return (
        // ? creamos un contexto para el usuario
        <UserProvider>
            {/* <h1>MainApp</h1> */}
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/About" element={<AboutPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/*" element={<Navigate to="/login" />} />
            </Routes>
        </UserProvider>
    )
}
