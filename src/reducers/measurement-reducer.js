import initialState from './initial-state';
import * as types from '../constants/actionTypes';

export default function (state = initialState.measurements, action) {
  switch (action.type) {
    case types.LOAD_MEASUREMENTS:
      return state;
    default:
      return state;
  }
}