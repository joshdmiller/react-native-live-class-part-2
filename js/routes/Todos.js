 /**
  * @flow
  */

import { connect } from 'react-redux';
import TodoListFactory from './TodoList';
import {
  createTodo,
  removeTodo,
} from '../actions/todos';

export function mapStateToProps ( state: Object ) {
  const { todos } = state;

  return {
    todos,
  };
}

export function mapDispatchToProps ( dispatch ) {
  return {
    addTodo: title => dispatch( createTodo( title ) ),
    rmTodo: id => dispatch( removeTodo( id ) ),
  };
}

export default ( React : Object )  => connect( mapStateToProps, mapDispatchToProps )( TodoListFactory( React ) );

