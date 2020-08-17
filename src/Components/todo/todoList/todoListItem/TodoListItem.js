import React from 'react';

const TodoListItem = ({ task, id, important, deleteTask, checkImportant }) => {
    return (
        <li>
            <h3>Task: {task}</h3>
            <h4>Status: {important ? "Important" : "Simple"}</h4>
            <button type="button" onClick={checkImportant} id={id}>Change status</button>
            <button type="button" onClick={deleteTask} id={id}>Done</button>
        </li>

    );
}

export default TodoListItem;