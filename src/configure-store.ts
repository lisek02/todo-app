import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { reducers } from './reducers'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history';
import { reducer as formReducer } from 'redux-form';

export const history = createBrowserHistory();

export function configureStore() {
  const reducer = combineReducers({
    router: connectRouter(history),
    form: formReducer,
    ...reducers
  });

  const composeEnhancers = (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    reducer,
    composeEnhancers(
      applyMiddleware(
        routerMiddleware(history)
      )
    )
  );

  return store;
}