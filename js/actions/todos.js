 /**
  * @flow
  */

import db from '../db';

export const createTodo = title => async function ( dispatch ) {
  try {
    dispatch({ type: 'ADD_TODO_START', title });

    const ref = await db.push({ title });
    const todo = { title, id: ref.key() };

    dispatch({ type: 'ADD_TODO', ...todo });
  } catch ( e ) {
    console.warn( 'DB Error:', e.stack );
  }
};

export const removeTodo = id => async function ( dispatch ) {
  try {
    dispatch({ type: 'REMOVE_TODO_START', id });

    await db.child( id ).remove();

    dispatch({ type: 'REMOVE_TODO', id });
  } catch ( e ) {
    console.warn( 'DB Error:', e.stack );
  }
};

export const initialLoad = todos => ({ type: 'LOAD_TODOS', todos });

