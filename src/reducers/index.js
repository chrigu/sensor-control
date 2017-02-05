import { combineReducers } from 'redux';
import measurements from './measurement-reducer';
import sensors from './sensors-reducer';

const rootReducer = combineReducers({
  measurements,
  sensors
});

export default rootReducer;