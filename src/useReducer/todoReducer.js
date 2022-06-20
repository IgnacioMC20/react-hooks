
export const todoReducer = (state = [], action) => {

    switch (action.type) {
        case '[Todo] Add':
            localStorage.setItem('todos', JSON.stringify([...state, action.payload]));
            return [...state, action.payload];
    
        case '[Todo] Delete':
            localStorage.setItem('todos', JSON.stringify(state.filter(todo => todo.id !== action.payload)));
            return state.filter(todo => todo.id !== action.payload);
    
        case '[Todo] Toggle':
            localStorage.setItem('todos', JSON.stringify(state.map(todo => todo.id === action.payload ? { ...todo, done: !todo.done } : todo)));
            return state.map(todo => todo.id === action.payload ? { ...todo, done: !todo.done } : todo);
    
        default:
            return state;
    }

}