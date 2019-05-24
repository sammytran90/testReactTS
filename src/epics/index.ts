import { combineEpics, Epic } from 'redux-observable';
import { delay, tap, mapTo, filter } from 'rxjs/operators';
import * as actions from '../actions';
import { ActionType, isActionOf } from 'typesafe-actions';
import { RootState } from '../reducers';


type Action = ActionType<typeof actions>;

export const visibilityFilterEpic: Epic<Action, Action, RootState> = (action$, store) =>
    action$.pipe(
        filter(isActionOf(actions.setVisibilityFilterAction)),
        delay(1500),
        tap(v => console.log('tap tap')),
        mapTo(actions.setVisibilityFilterAction(actions.VisibilityFilters.SHOW_ALL))
    )

export const rootEpic = combineEpics(
    visibilityFilterEpic
)