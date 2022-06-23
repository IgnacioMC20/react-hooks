import { render, screen, fireEvent } from "@testing-library/react";
import { HomePage } from "../../useContext/HomePage";
import { UserContext } from "../../useContext/context/UserContext";
import { LoginPage } from "../../useContext/LoginPage";

describe('Pruebas en <UserContext />', () => {


    test('should show component without user', () => {

        render(
            <UserContext.Provider value={{ user: null }} >
                <LoginPage />
            </UserContext.Provider>
        );

        // screen.debug();

        // ? llamamos al elemento con el valor 'pre' en el atributo aria-label
        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('');

    });

    test('should show component with user', () => {

        const user = {
            id: 1,
            name: 'Ignacio',
        };

        render(
            <UserContext.Provider value={{ user }} >
                <LoginPage />
            </UserContext.Provider>
        );

        // screen.debug();

        const preTag = screen.getByLabelText('pre');
        // expect(preTag.innerHTML).toBe('Ignacio');
        expect(preTag.innerHTML).toBe(`${user.name}`);

    });

    test('should call setUser function', () => {
        const user = {
            id: 1,
            name: 'Ignacio',
            lastname: 'Martínez',
        };

        const setUser = jest.fn();

        render(
            <UserContext.Provider value={{ setUser }} >
                <HomePage />
            </UserContext.Provider>
        );

        fireEvent.click(screen.getByRole('button'));
        expect(setUser).toHaveBeenCalledWith(user);
    });
});