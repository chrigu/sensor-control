import { put, call } from 'redux-saga/effects';
import { loadMeasurements } from '../api/api';
import * as types from '../constants/actionTypes';


export default function* loadMeasurementsSaga({ payload }) {
  try {
      console.log('intercept');
    const measurements = yield call(loadMeasurements);
    yield [
      put({ type: types.LOAD_MEASUREMENTS_SUCCESS, measurements }),
    ];
  } catch (error) {
    yield put({ type: 'LOAD_MEASUREMENTS_FAIL', error });
  }
}
