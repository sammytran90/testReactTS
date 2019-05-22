import { Action } from "redux";

let nextTodoId = 0;

export enum todoActionTypes {
    ADD_TODO = 'ADD_TODO',
    TOGGLE_TODO = 'TOGGLE_TODO'
}

export interface AddTodoAction extends Action {
    type: todoActionTypes.ADD_TODO,
    id: number,
    text: string,
}

export interface ToggleTodoAction extends Action {
    type: todoActionTypes.TOGGLE_TODO,
    id: number,
}

export interface toggleTodoActionType {
    type: string,
    id: number
}

export const addTodo = (text: string): AddTodoAction => ({
    type: todoActionTypes.ADD_TODO,
    id: nextTodoId++,
    text
})

export const toggleTodo = (id: number): ToggleTodoAction => ({
    type: todoActionTypes.TOGGLE_TODO,
    id
})

export enum setVisibilityFilterActionTypes {
    SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
}

export interface setVisibilityFilterAction extends Action {
    type: setVisibilityFilterActionTypes.SET_VISIBILITY_FILTER,
    filter: string
}

export const setVisibilityFilter = (filter: string): setVisibilityFilterAction => ({
    type: setVisibilityFilterActionTypes.SET_VISIBILITY_FILTER,
    filter
})

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export type TodoActions = AddTodoAction | ToggleTodoAction;