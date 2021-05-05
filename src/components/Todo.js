import React from 'react'

const Todo = (props) => {
    return (
        <ul className = "Ans">
           {props.todos.map((todo, index)=> (
               <li key = {index}>{todo}</li>
           ))} 
        </ul>
    )
}

export default Todo
