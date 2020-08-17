import { ADDNEWTASK, DELETETASK, CHECKIMPORTANT } from '../constants/todoConstants';


const initialState = []

export default (state = [...initialState], { payload, type }) => {
    console.log('payload', payload)
    switch (type) {
        case ADDNEWTASK:
            return [...state, payload];
        case DELETETASK:
            return [...state.filter(task => task.id !== payload)]
        case CHECKIMPORTANT:
            return [...state.map(task => (task.id === payload) ? { ...task, important: !task.important } : task)]
        default:
            return state;
    }
}
