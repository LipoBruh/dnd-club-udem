import { combineReducers } from 'redux';
import counterReducer from './counterSlice.js';
//import authReducer from './features/auth/authSlice';
//import todosReducer from './features/todos/todosSlice';
//import preferencesReducer from './features/preferences/preferencesSlice';
//import apiReducer from './features/api/apiSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
 // auth: authReducer,
 // todos: todosReducer,
 // preferences: preferencesReducer,
 // api: apiReducer,
});

export default rootReducer;
