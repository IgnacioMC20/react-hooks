import React from 'react'
import { useTodo } from '../hooks/useTodo'
import { TodoList } from './TodoList'

export const TodoApp = () => {

 

    const { todos, handleBorrar, handleToggleTodo, handleSubmit, description, onInputChange, pending } = useTodo();

  return (
    <>
        <h1>TodoApp: { todos.length } - pendientes: { pending }</h1>
        <hr />
        <TodoList todos={todos} handleBorrar={handleBorrar} handleToggleTodo={handleToggleTodo} />

        <hr />
        <h4>Agregar</h4>
        <form onSubmit={handleSubmit}>
            <input type="text" value={description} name='description' onChange={onInputChange} />
            <button type="submit" >Agregar</button>
        </form>
    </>
  )
}
