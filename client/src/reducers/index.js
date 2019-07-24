import {combineReducers} from 'redux';
import authReducer from './authReducer';
import monthReducer from './monthReducer';
import dayReducer from './dayReducer';

export default combineReducers ({
  auth: authReducer,
  months:monthReducer,
  days:dayReducer
});
