import React from 'react'

export const TodoItem = ({todo, handleBorrar, handleToggleTodo}) => {

   

    return (
        <li><span className={ todo.done ? 'completed' : undefined} onClick={() => handleToggleTodo(todo.id)}>{todo.description}</span> <button onClick={ () => handleBorrar(todo.id)}> borrar </button></li>
    )
}
