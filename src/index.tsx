import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import { createEpicMiddleware } from 'redux-observable';
import { ActionType } from 'typesafe-actions';
import { RootState } from './reducers';
import * as actions from './actions';
import { rootEpic } from './epics';

type Action = ActionType<typeof actions>;


const epicMiddleware = createEpicMiddleware<Action, Action, RootState>();
const middleWare = applyMiddleware(epicMiddleware);
const enhancer = (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
    rootReducer,
    compose(middleWare, enhancer)
)

// epicMiddleware.run(rootEpic);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
