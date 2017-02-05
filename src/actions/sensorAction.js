import * as types from '../constants/actionTypes';

export const showSensorForm = () => ({
  type: types.SHOW_SENSOR_FORM,
  payload: null
});

export const hideSensorForm = () => ({
  type: types.HIDE_SENSOR_FORM,
  payload: null
});

export const loadSensors = () => ({
  type: types.LOAD_SENSORS,
  payload: null
});

export const loadSensorsSuccess = (sensors) => ({
  type: types.LOAD_SENSORS_SUCCESS,
  sensors
});

export const addSensorsFail = (error) => ({
  type: types.LOAD_SENSORS_FAIL,
  error
});

export const addSensor = (sensor) => ({
  type: types.ADD_SENSOR,
  sensor
});

export const addSensorSuccess = (sensors) => ({
  type: types.ADD_SENSOR_SUCCESS,
  sensors
});

export const addSensorFail = (error) => ({
  type: types.ADD_SENSOR_FAIL,
  error
});

