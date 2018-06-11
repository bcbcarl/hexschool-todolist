import prepend from 'ramda/src/prepend';

const todos = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_TODOS_FULFILLED':
      return action.payload;
    case 'ADD_TODO':
      return prepend(
        {
          id: action.id,
          created_at: action.created_at,
          due_at: 0,
          title: action.text,
          pinned: false,
          completed: false,
          attachment: false,
          comment: ''
        },
        state
      );
    case 'TOGGLE_TODO':
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export default todos;
