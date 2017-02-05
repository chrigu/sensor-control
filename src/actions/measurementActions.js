import * as types from '../constants/actionTypes';

export const loadMeasurements = () => ({
  type: types.LOAD_MEASUREMENTS,
  payload: null
});

export const loadMeasurementsSuccess = (data) => ({
  type: types.LOAD_MEASUREMENTS_SUCCESS,
  payload: data
});

export const loadMeasurementsFail = (error) => ({
  type: types.LOAD_MEASUREMENTS_FAIL,
  payload: error
});