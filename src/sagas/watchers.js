import { takeLatest } from 'redux-saga/effects';
import loadMeasurementsSaga from './measurementsSages';
import {loadSensorsSaga, addSensorSaga} from './sensorsSagas';
import * as types from '../constants/actionTypes';

export function* watchLoadMeasurements() {
  yield takeLatest(types.LOAD_MEASUREMENTS, loadMeasurementsSaga);
}

export function* watchAddSensor() {
  yield takeLatest(types.ADD_SENSOR, addSensorSaga);
}

export function* watchLoadSensor() {
  yield takeLatest(types.LOAD_SENSORS, loadSensorsSaga);
}
