 /**
  * @flow
  */

const defaultTodos = [
  {
    id: 0,
    title: 'Learn React Native',
  },
  {
    id: 1,
    title: 'Integrate Redux',
  },
];

export default ( state : Array<Object> = [], action: Object ) => {
  const { type, ...props } = action;

  switch ( action.type ) {
    case 'ADD_TODO':
      const id = ( state.map( t => t.id ).sort().pop() || 0 ) + 1;
      return [ ...state, { ...props, id } ];
    case 'REMOVE_TODO':
      return state.filter( t => t.id !== action.id );
    case 'SEED_TODOS':
      return [ ...defaultTodos ];
    default:
      return state;
  }
};

