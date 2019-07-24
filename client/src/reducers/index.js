import {combineReducers} from 'redux';
import authReducer from './authReducer';
import monthReducer from './monthReducer';

export default combineReducers ({
  auth: authReducer,
  months:monthReducer
});
