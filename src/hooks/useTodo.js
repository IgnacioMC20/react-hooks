import { useReducer } from "react";
import { todoReducer } from "../useReducer/todoReducer";
import { useForm } from "./useForm";



export const useTodo = () => {
  

    const initialState = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [
        {
            id: new Date().getTime(),
            description: 'Hacer la compra',
            done: false
        },
        {
            id: new Date().getTime() + 100 ,
            description: 'Hacer la compra 2',
            done: false
        },
    ]

    const { description, onInputChange, onResetForm } = useForm({
        description: ''
    })

    const [ todos, dispatch ] = useReducer(todoReducer, initialState)


    const handleSubmit = (event) => {
      event.preventDefault();

        if(description.trim().length === 0) return;

        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false
        }

        onResetForm();

        const action = {
            type: '[Todo] Add',
            payload: newTodo
        }

        dispatch(action);

    }

    const handleBorrar = (id) => {

        const action = {
            type: '[Todo] Delete',
            payload: id
        }

        dispatch(action);
    }

    const handleToggleTodo = (id) => {

        const action = {
            type: '[Todo] Toggle',
            payload: id
        }

        dispatch(action);
    }


    return {
        todos,
        handleSubmit,
        handleBorrar,
        handleToggleTodo,
        description,
        onInputChange,
        pending: todos.filter( todo => !todo.done).length
    }
}