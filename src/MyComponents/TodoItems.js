import React from 'react'
//Displays the todo task passed to it
export default function TodoItems({ todo,onDelete }) {
    return (
        <div className="task">
            <h4>{todo.taskName} </h4>
            <p> {todo.taskDesc} </p>
            <p className='right-date-todo'> {todo.todo_date}</p>
            <button className='btn btn-danger' onClick={()=>onDelete(todo)}>Delete</button>
        </div>
    );
}