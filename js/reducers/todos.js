 /**
  * @flow
  */

export default ( state : Array<Object> = [], action: Object ) => {
  const { type, ...props } = action;

  switch ( action.type ) {
    case 'LOAD_TODOS':
      return action.todos;
    case 'ADD_TODO':
      return [ ...state, { ...props } ];
    case 'REMOVE_TODO':
      return state.filter( t => t.id !== action.id );
    default:
      return state;
  }
};

