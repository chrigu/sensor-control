import initialState from './initial-state';
import * as types from '../constants/actionTypes';

export default function (state = initialState.sensors, action) {
  switch (action.type) {
    case types.SHOW_SENSOR_FORM:
      return {...state, showSensorForm: true };
    case types.HIDE_SENSOR_FORM:
      return {...state, showSensorForm: false };
    case types.ADD_SENSOR_SUCCESS:
    case types.LOAD_SENSORS_SUCCESS:
      return {...state, sensors: action.sensors}
    default:
      return state;
  }
}