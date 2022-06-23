import { MainApp } from "../../useContext/MainApp";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";


describe('<MainApp/> tests', () => {
  
    test('should show Home Page', () => {
        render(
        <MemoryRouter>
            <MainApp />
        </MemoryRouter>
        );
        
        // screen.debug();
        expect(screen.getByText('HomePage')).toBeTruthy();
    });
    
    test('should show Login Page', () => {
        render(
            // ? mandamos el url que queremos
        <MemoryRouter initialEntries={['/login']}>
            <MainApp />
        </MemoryRouter>
        );
        
        // screen.debug();
        expect(screen.getByText('LoginPage')).toBeTruthy();
    });
    
    test('<a>Login</a> should have active className', () => {
        render(
            // ? mandamos el url que queremos
        <MemoryRouter initialEntries={['/login']}>
            <MainApp />
        </MemoryRouter>
        );
        
        // screen.debug();
        expect(screen.getByText('Login').className).toBe('active');
    });
})