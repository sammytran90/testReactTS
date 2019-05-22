import { VisibilityFilters, setVisibilityFilterAction, setVisibilityFilterActionTypes } from '../actions'
import { filter, mapTo, delay } from 'rxjs/operators';
// import { Observable } from 'rxjs';
import { ActionsObservable, ofType } from 'redux-observable';
import { Action } from 'redux';
import { isOfType } from 'typesafe-actions';
import { Observable } from 'rxjs';

export const visibilityFilterEpic = (action$: ActionsObservable<setVisibilityFilterAction>): Observable<setVisibilityFilterAction> =>
    action$.pipe(
        ofType<setVisibilityFilterAction,VisibilityFilters.SHOW_COMPLETED>()

    )
        // action$.pipe(
//     // filter(action => action.type === VisibilityFilters.SHOW_COMPLETED),
//     // ofType<setVisibilityFilterAction>('SET_VISIBILITY_FILTER'),
//     // filter(isOfType(setVisibilityFilterActionTypes.SET_VISIBILITY_FILTER)),
//     // filter(ofType<>)
//     delay(1500),
//     mapTo({
//         type: 'SET_VISIBILITY_FILTER',
//         filter: VisibilityFilters.SHOW_ALL
//     })
// )

export const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action: setVisibilityFilterAction) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter
        default:
            return state
    }
}

// export default visibilityFilter