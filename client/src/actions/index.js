import axios from 'axios';
import { FETCH_USER, FETCH_MONTHS, FETCH_DAYS, FETCH_MONTH_INFO, FETCH_REQUESTS } from './types';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
  
    dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchMonths = () => async dispatch => {
  const res = await axios.get('/api/months');

  dispatch({ type: FETCH_MONTHS, payload: res.data });
};

export const fetchMonthInfo = (id) => async dispatch => {
  const res = await axios.get('/api/monthInfo/' + id);

  dispatch({ type: FETCH_MONTH_INFO, payload: res.data });
};

export const fetchDays = (id) => async dispatch => {
  const res = await axios.get('/api/months/' + id);

  dispatch({ type: FETCH_DAYS, payload: res.data });
};

export const fetchRequests = (id) => async dispatch => {
  const res = await axios.get('/api/hollidaysrequest/' + id);

  dispatch({ type: FETCH_REQUESTS, payload: res.data });
};