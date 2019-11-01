import {createBrowserHistory} from 'history';
import createSagaMiddleware from 'redux-saga'

import {createStore, compose, applyMiddleware} from 'redux';
// // import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
// // 'routerMiddleware': the new way of storing route changes with redux middleware since rrV4.
import { connectRouter, routerMiddleware } from 'connected-react-router';
import rootReducer from '../redux/reducers';
import thunk from 'redux-thunk';

import mySaga from '../redux/sagas'

export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});

const connectRouterHistory = connectRouter(history);
const sagaMiddleware = createSagaMiddleware()

// function configureStoreProd(initialState) {
//   const reactRouterMiddleware = routerMiddleware(history);
//   const middlewares = [
//     // Add other middleware on this line...

//     // thunk middleware can also accept an extra argument to be passed to each thunk action
//     // https://github.com/reduxjs/redux-thunk#injecting-a-custom-argument
//     thunk,
//     reactRouterMiddleware,
//   ];

//   return createStore(
//     connectRouterHistory(rootReducer), 
//     initialState, 
//     compose(applyMiddleware(...middlewares))
//   );
// }

function configureStoreDev(initialState) {
  const reactRouterMiddleware = routerMiddleware(history);
  const middlewares = [
    // Add other middleware on this line...

    // Redux middleware that spits an error on you when you try to mutate your state either inside a dispatch or between dispatches.
    // reduxImmutableStateInvariant(),

    // thunk middleware can also accept an extra argument to be passed to each thunk action
    // https://github.com/reduxjs/redux-thunk#injecting-a-custom-argument
    sagaMiddleware,
    thunk,
    reactRouterMiddleware,
  ];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
  const store = createStore(
    connectRouterHistory(rootReducer),  
    initialState, 
    // applyMiddleware(...middlewares),
    composeEnhancers(applyMiddleware(...middlewares))
  );

  // if (module.hot) {
  //   // Enable Webpack hot module replacement for reducers
  //   module.hot.accept('../redux/reducers', () => {
  //     const nextRootReducer = require('../redux/reducers').default; // eslint-disable-line global-require
  //     store.replaceReducer(connectRouterHistory(nextRootReducer));
  //   });
  // }
  sagaMiddleware.run(mySaga)

  return store;
}

// const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;
const configureStore = configureStoreDev;
export default configureStore;
