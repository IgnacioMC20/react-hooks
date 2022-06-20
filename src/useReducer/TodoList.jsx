import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({todos = [], handleBorrar, handleToggleTodo}) => {

    return (
        <ul>
            {
                todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} handleBorrar={handleBorrar} handleToggleTodo={handleToggleTodo} />
                ))
            }
            
        </ul>
    )
}
