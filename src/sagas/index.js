import { fork, take, delay, put, takeEvery } from 'redux-saga/effects';
import { watchLoadMeasurements, watchAddSensor, watchLoadSensor } from './watchers';

export default function* startForman() {
yield [
    watchLoadMeasurements(),
    watchAddSensor(),
    watchLoadSensor()
  ]
  // yield fork(watchLoadMeasurements, watchAddSensor);
  // // yield ();
}
