import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';
import createLogger from 'redux-logger';

const configureStore = () => {
  const logger = createLogger();
  const sagaMiddleware = createSagaMiddleware();
  return {
    ...createStore(rootReducer,
      applyMiddleware(sagaMiddleware, logger)),
    runSaga: sagaMiddleware.run(rootSaga)
  };
};

export default configureStore;