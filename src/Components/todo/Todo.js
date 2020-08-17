import React from 'react'
import TodoForm from './todoForm/TodoForm';
import { connect } from 'react-redux';
import { addNewTask, deleteTask, checkImportant } from '../../redux/actions/todoActions';
import TodoLIst from './todoList/TodoLIst';

const Todo = (props) => {
    const { todoItems, addNewTask, deleteTask, checkImportant } = props;
    return (
        <>
            <TodoForm addNewTask={addNewTask} />
            <TodoLIst todoItems={todoItems} deleteTask={deleteTask} checkImportant={checkImportant} />
        </>
    );
}

const mapStateToProps = (state) => {

    return {
        todoItems: state.todo
    }
}

export default connect(mapStateToProps, { addNewTask, deleteTask, checkImportant })(Todo);

