import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { reducers } from './reducers'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history';
import { reducer as formReducer } from 'redux-form';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

export const history = createBrowserHistory();

export function configureStore() {
  const persistConfig = {
    key: 'todo-app',
    storage,
  }

  
  const reducer = combineReducers({
    router: connectRouter(history),
    form: formReducer,
    ...reducers
  });

  const persistedReducer = persistReducer(persistConfig, reducer);

  const composeEnhancers = (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    persistedReducer,
    composeEnhancers(
      applyMiddleware(
        routerMiddleware(history)
      )
    )
  );

  const persistor = persistStore(store)

  return { store, persistor };
}