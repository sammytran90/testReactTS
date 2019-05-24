// import { Action } from "redux";
import { createAction } from 'typesafe-actions';

let nextTodoId = 0;

export enum todoActionTypes {
    ADD_TODO = 'ADD_TODO',
    TOGGLE_TODO = 'TOGGLE_TODO'
}

export interface toggleTodoActionType {
    type: string,
    id: number
}

export enum setVisibilityFilterTypes {
    SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
}

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

// testAction = createAction('testAction')

export const AddTodoAction = createAction(todoActionTypes.ADD_TODO, resolve => (text: string) => resolve({ id: nextTodoId++, text }));
export const ToogleTodoAction = createAction(todoActionTypes.TOGGLE_TODO, resolve => (id: number) => resolve({ id }));
export const setVisibilityFilterAction = createAction(setVisibilityFilterTypes.SET_VISIBILITY_FILTER, resolve => (filter: string) => resolve({ filter }));
// export interface AddTodoAction extends Action {
//     type: todoActionTypes.ADD_TODO,
//     id: number,
//     text: string,
// }

// export interface ToggleTodoAction extends Action {
//     type: todoActionTypes.TOGGLE_TODO,
//     id: number,
// }

// export const addTodo = (text: string): AddTodoAction => ({
//     type: todoActionTypes.ADD_TODO,
//     id: nextTodoId++,
//     text
// })

// export const toggleTodo = (id: number): ToggleTodoAction => ({
//     type: todoActionTypes.TOGGLE_TODO,
//     id
// })



// export interface setVisibilityFilterAction extends Action {
//     type: setVisibilityFilterActionTypes.SET_VISIBILITY_FILTER,
//     filter: string
// }

// export const setVisibilityFilter = (filter: string): setVisibilityFilterAction => ({
//     type: setVisibilityFilterActionTypes.SET_VISIBILITY_FILTER,
//     filter
// })



// export type TodoActions = AddTodoAction | ToggleTodoAction;
