import { ADDNEWTASK, DELETETASK, CHECKIMPORTANT } from '../constants/todoConstants';
import { v4 as uuidv4 } from 'uuid';

export const addNewTask = (task) => {
    console.log('task', task)
    return {
        type: ADDNEWTASK,
        payload: { id: uuidv4(), ...task }
    }
}

export const deleteTask = (e) => {
    const id = e.target.id;
    return {
        type: DELETETASK,
        payload: id
    }
}

export const checkImportant = (e) => {
    const id = e.target.id;
    return {
        type: CHECKIMPORTANT,
        payload: id
    }
}

