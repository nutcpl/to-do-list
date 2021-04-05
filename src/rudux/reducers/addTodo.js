const initialState = {
  todos: [],
};

export default (state = initialState, { action, type, payload }) => {
  switch (type) {
    case "ADD_TODO":
      return { ...state, todos: state.todos.concat(payload) };

    case "DEL_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo, index) => index !== payload),
      };

    default:
      return state;
  }
};
