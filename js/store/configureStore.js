 /**
  * @flow
  */

import { AsyncStorage } from 'react-native';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reducers from '../reducers';
import { initialLoad } from '../actions/todos';
import db from '../db';

const isDebuggingInChrome = __DEV__ && !! window.navigator.userAgent;

const logger = createLogger({
  predicate: () => isDebuggingInChrome,
  collapsed: true,
  duration: true,
});

const createRN2Store = applyMiddleware( thunk, logger )( createStore );

export default function ( onComplete: ?() => void ) {
  const store = createRN2Store( reducers, {
    todos: [],
  });

  db.once( 'value', data => {
    const o = data.val();
    const a = Object.getOwnPropertyNames( o ).map( id => ({ id, ...o[ id ] }) );
    store.dispatch( initialLoad( a ) );
  });

  if ( isDebuggingInChrome ) {
    window.store = store;
  }

  return store;
}

