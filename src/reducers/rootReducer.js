import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import registerReducer from './registerReducer';
import loginReducer from './loginReducer';

export default combineReducers({
  simpleReducer,
  registerReducer,
  loginReducer,
});
