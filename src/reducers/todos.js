const defaultTitle = 'Type Something Here...';

const initialItems = [
  {
    id: 1528578226000,
    created_at: 1528578226000,
    due_at: 1557763200000,
    title: defaultTitle,
    pinned: true,
    completed: false,
    attachment: true,
    comment: 'meet him at Lorence Cafe'
  },
  {
    id: 1528578231000,
    created_at: 1528578231000,
    due_at: 0,
    title: defaultTitle,
    pinned: true,
    completed: false,
    attachment: true,
    comment: 'meet her at Coffee Shop'
  },
  {
    id: 1528578236000,
    created_at: 1528578236000,
    due_at: 1560787200000,
    title: defaultTitle,
    pinned: false,
    completed: false,
    attachment: false,
    comment: ''
  },
  {
    id: 1528578241000,
    created_at: 1528578241000,
    due_at: 0,
    title: defaultTitle,
    pinned: false,
    completed: false,
    attachment: true,
    comment: ''
  },
  {
    id: 1528578246000,
    created_at: 1528578246000,
    due_at: 0,
    title: defaultTitle,
    pinned: false,
    completed: true,
    attachment: false,
    comment: ''
  }
];

const todos = (state = initialItems, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          created_at: action.created_at,
          due_at: 0,
          title: action.text,
          pinned: false,
          completed: false,
          attachment: false,
          comment: ''
        }
      ];
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
