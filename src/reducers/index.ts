import { combineReducers } from 'redux';

import { todos } from './todo.reducer';
import { visibilityFilter } from './visibilityFilter.reducer';

import { todoState } from './todo.reducer';
import { filterState } from './visibilityFilter.reducer';

// epic redux-observables

export type RootState = {
    todoState: todoState[],
    filterState: filterState
}

export default combineReducers({
    todos,
    visibilityFilter
});