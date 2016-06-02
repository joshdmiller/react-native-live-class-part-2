 /**
  * @flow
  */

import shortid from 'shortid';

export const createTodo = title => ({
  type: 'ADD_TODO',
  title,
  id: shortid.generate(),
});

export const removeTodo = id => ({ type: 'REMOVE_TODO', id });

