import { combineReducers } from 'redux';
import { todos } from './todo.reducer';

import { visibilityFilter, visibilityFilterEpic } from './visibilityFilter.reducer';

// epic redux-observables
import { combineEpics } from 'redux-observable';

export const rootEpic = combineEpics({
    // todosEpic,
    visibilityFilterEpic
})

export default combineReducers({
    todos,
    visibilityFilter
});