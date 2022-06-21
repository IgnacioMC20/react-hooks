import React from 'react';

import {
    BrowserRouter,
    Routes,
    Route,
    NavLink,
} from "react-router-dom";

export const RouterComponent = () => {
    return (
        <BrowserRouter>
            <h1>MainApp</h1>
            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
            {/* <Link to="/login">Login</Link> */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/About" element={<AboutPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/*" element={<Navigate to="/login" />} />
            </Routes>
        </BrowserRouter>
    )
}
