import {
  ADD_TODO,
  SET_VISIBILITY_FILTER,
  TOGGLE_TODO,
  VisibilityFilters
} from "./actions";

import { combineReducers } from "redux"

const { SHOW_ALL } = VisibilityFilters
// const initialState = {
//   visibilityFilter: VisibilityFilters.SHOW_ALL,
//   todos: [],
// };

// 抽离 todos
const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
        },
      ];
    case TOGGLE_TODO:
      return state.map((todo, index) =>
        index === action.index ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};
// 抽离 visibilityFilter
const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

/*
const todoApp = (state = {}, action) => ({
  visibilityFilter: visibilityFilter(state.visibilityFilter, action),
  todos: todos(state.todos, action)
});
*/

// 可以使用 combineReducers 替代上述操作
const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp