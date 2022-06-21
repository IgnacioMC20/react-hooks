import { todoReducer } from "../../useReducer/todoReducer";

describe('Pruebas en todo reducer', () => {
    
    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        done: false
    }];

    test('debe regresar al estado inicial', () => {

       const newState = todoReducer(initialState, {});
       expect(newState).toEqual(initialState); 

    });

    test('debe agregar un todo', () => {
        const action = {
            type: '[Todo] Add',
            payload: {
                id: 2,
                description: 'Demo Todo 2',
                done: false
            }
        }
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
    });

    test('debe eliminar un todo', () => {
        const action = {
            type: '[Todo] Delete',
            payload: 1
        }

        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(0);
    });

    test('debe cambiar el estado de un todo', () => {
        const action = {
            type: '[Todo] Toggle',
            payload: 1
        }
        const newState = todoReducer(initialState, action);
        expect(newState[0].done).toBe(true);
    })

})