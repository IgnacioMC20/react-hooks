const { render, screen, fireEvent } = require("@testing-library/react");
const { TodoItem } = require("../../useReducer/TodoItem");

describe('Pruebas en <TodoItem />', () => { 

    const todo = {
        id: 1,
        description: 'Hacer la compra',
        done: false
    }

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    // * limpia las funciones que se han llamado y las deja como si fueran nuevas
    beforeEach(() => jest.clearAllMocks());

    test('Debe de mostar el todo pendiente de completar', () => { 
        render(<TodoItem todo={todo} handleBorrar={onDeleteTodoMock} handleToggleTodo={onToggleTodoMock} />);
        const liElement = screen.getByText(todo.description);
        expect(liElement.className).toBe('');
        // screen.debug();
     });

    test('Debe de mostar el todo completado', () => { 
        todo.done = true;
        render(<TodoItem todo={todo} handleBorrar={onDeleteTodoMock} handleToggleTodo={onToggleTodoMock} />);
        const liElement = screen.getByText(todo.description);
        expect(liElement.className).toBe('completed');
        // screen.debug();
    });
    
    test('Span should call toggleTodo when clicked', () => {
        render(<TodoItem todo={todo} handleBorrar={onDeleteTodoMock} handleToggleTodo={onToggleTodoMock} />);
        const spanElement = screen.getByText(todo.description);
        fireEvent.click(spanElement);
        // screen.debug();
        expect(onToggleTodoMock).toHaveBeenCalledWith(1);
     });

    test('Span should call toggle borrar when clicked', () => {
       
     });

 })