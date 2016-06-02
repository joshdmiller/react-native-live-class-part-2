 /**
  * @flow
  */

import rs from 'react-stamp';
import {
  View,
  Text,
  ListView,
  TextInput,
} from 'react-native';
import { connect } from 'react-redux';
import TodoFactory from './Todo';
import stylesheet from '../stylesheet';
import {
  createTodo,
  removeTodo,
} from '../actions/todos';

export const TodosFactory = ( React : Object ) => {
  const Todo = TodoFactory( React );

  return rs( React ).compose({
    init () {
      const { todos } = this.props;
      const dataSource = new ListView.DataSource({
        rowHasChanged: ( r1: Object, r2: Object ) => r1 !== r2,
      });

      this.state = {
        dataSource,
        newTodo: '',
      };
      this._setTodos( todos );
    },

    _setTodos ( todos ) {
      this.state = {
        dataSource: this.state.dataSource.cloneWithRows( todos ),
      };
    },

    _addTodo () {
      this.props.addTodo( this.state.newTodo );
      this.setState({ newTodo: '' });
    },

    componentWillReceiveProps ( nextProps ) {
      this._setTodos( nextProps.todos );
    },

    render () {
      const { dataSource } = this.state;
      const { rmTodo } = this.props;

      return (
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder='Add a new todo'
            onChangeText={newTodo => this.setState({ newTodo })}
            value={this.state.newTodo}
            onSubmitEditing={() => this._addTodo()}
          />

          <ListView
            style={{ flex: 1 }}
            dataSource={dataSource}
            renderRow={d => <Todo {...d} onDelete={ rmTodo } />}
            enableEmptySections={true}
          />
        </View>
      );
    },
  });
};

const styles = stylesheet({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  input: {
    //
  },
});

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

export default ( React : Object )  => connect( mapStateToProps, mapDispatchToProps )( TodosFactory( React ) );

