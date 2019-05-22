import { TodoActions } from '../actions';
import { filter, mapTo } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ActionsObservable, ofType } from 'redux-observable';
import { Action } from 'redux';

export interface todoStoreType {
    id: number,
    text?: string,
    completed: boolean
}

// export const todosEpic = (action$: ActionsObservable<Action>) => action$.pipe(
//     filter(ofType<todoAction>()),
//     mapTo({ type: 'PONG' })
// );


export const todos = (state: todoStoreType[] = [], action: TodoActions) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(todo =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            )
        default:
            return state
    }
}

// export default todos