import {combineReducers} from 'redux';
import authReducer from './authReducer';
import monthReducer from './monthReducer';
import dayReducer from './dayReducer';
import monthInfoReducer from './monthInfoReducer';

export default combineReducers ({
  auth: authReducer,
  months:monthReducer,
  monthInfo:monthInfoReducer,
  days:dayReducer
});
