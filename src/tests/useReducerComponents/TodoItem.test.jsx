const { render, screen } = require("@testing-library/react");
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

    test('Debe de mostar el Todo pendiente de completar', () => { 
        render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock} />);
        const liElement = screen.getByText(todo.description);
     })

 })