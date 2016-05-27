 /**
  * @flow
  */

export default ( state : Array<Object> = [], action: Object ) => {
  const { type, ...props } = action;

  switch ( action.type ) {
    case 'ADD_TODO':
      const id = ( state.map( t => t.id ).sort().pop() || 0 ) + 1;
      return [ ...state, { ...props, id } ];
    case 'REMOVE_TODO':
      return state.filter( t => t.id !== action.id );
    default:
      return state;
  }
};

