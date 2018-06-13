const toggleTodo = (todos, key) => {
  const todo = todos[key];
  return {
    ...todos,
    [key]: {
      ...todo,
      completed: !todo.completed
    }
  };
};

const initialState = {};
const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TODOS_FULFILLED':
      return {
        ...state,
        ...action.payload
      };
    case 'ADD_TODO':
      return {
        [action.id]: {
          created_at: action.created_at,
          due_at: 0,
          title: action.text,
          pinned: true,
          completed: false,
          attachment: false,
          comment: ''
        },
        ...state
      };
    case 'TOGGLE_TODO':
      return Object.keys(state).map(
        key => (key === action.id ? toggleTodo(state, key) : state)
      );
    default:
      return state;
  }
};

export default todos;
