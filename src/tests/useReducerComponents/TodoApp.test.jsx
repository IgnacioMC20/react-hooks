const { render, screen, fireEvent } = require("@testing-library/react");
const { useTodo } = require("../../hooks/useTodo");
const { TodoApp } = require("../../useReducer/TodoApp");

jest.mock("../../useReducer/TodoApp")

describe('Pruebas en <TodoApp />', () => {
    useTodo.mockReturnValue({
        todos: [
            { id: 1, description: 'Hacer la compra', done: false },
            { id: 2, description: 'Hacer la limpieza', done: true },
        ], 
        handleBorrar: jest.fn(), 
        handleToggleTodo: jest.fn(), 
        handleSubmit: jest.fn(), 
        pending: 1,
    })

    test('should show TodoApp', () => {
        render(<TodoApp />);
        screen.debug();
    });

});