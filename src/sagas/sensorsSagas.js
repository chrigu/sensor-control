import { put, call } from 'redux-saga/effects';
import { addSensor, loadSensors } from '../api/api';
import * as types from '../constants/actionTypes';


export function* addSensorSaga({ sensor }) {
  try {
    const sensors = yield call(addSensor, sensor);
    yield [
      put({ type: types.ADD_SENSOR_SUCCESS, sensors }),
    ];
  } catch (error) {
    yield put({ type: types.ADD_SENSOR_FAIL, error });
  }
}

export function* loadSensorsSaga() {
  try {
    const sensors = yield call(loadSensors);
    yield [
      put({ type: types.LOAD_SENSORS_SUCCESS, sensors }),
    ];
  } catch (error) {
    yield put({ type: types.LOAD_SENSORS_FAIL, error });
  }
}

