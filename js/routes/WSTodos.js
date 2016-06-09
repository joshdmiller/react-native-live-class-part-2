 /**
  * @flow
  */

import shortid from 'shortid';
import rs from 'react-stamp';
import TodoListFactory from './TodoList';
import {
  createTodo,
  removeTodo,
} from '../actions/todos';

export default ( React : Object ) => {
  const TodoList = TodoListFactory( React );

  return rs( React ).compose({
    init () {
      this.state = {
        todos: [],
      };
    },

    render () {
      const { todos } = this.state;

      return <TodoList
        todos={todos}

        addTodo={ title => this._addTodo( title )}
        rmTodo={ id => this._rmTodo( id )}
      />;
    },

    componentDidMount () {
      this._ws = new WebSocket( 'ws://echo.websocket.org/' );

      this._ws.onmessage = res => this.setState({
        todos: [ ...this.state.todos, JSON.parse( res.data ) ],
      });
    },

    componentWillUnmount () {
      this._ws.close();
    },

    _addTodo ( title ) {
      this._ws.send( JSON.stringify({ title, id: shortid.generate() }) );
    },

    _rmTodo ( id ) {
      console.warn( 'Deleting is an exercise left to you.' );
    },
  });
};

