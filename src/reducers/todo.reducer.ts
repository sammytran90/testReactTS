import * as actions from '../actions';

export interface todoState {
    id: number,
    text?: string,
    completed: boolean
}

export const todos = (state: todoState[] = [], action: any) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_TODO':
            let newState: todoState[] = [
                ...state,
                {
                    id: action.payload.id,
                    text: action.payload.text,
                    completed: false
                }
            ]
            console.log(newState);
            return newState;
        case 'TOGGLE_TODO':
            return state.map(todo =>
                todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
            )
        default:
            return state
    }
}

// export default todos