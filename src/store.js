 
import reducers from './reducers/rootReducer';
// ...
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger';
// ...
import {rootSaga} from './sagas/sagas'

const sagaMiddleware = createSagaMiddleware()
export const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware,logger)
)
sagaMiddleware.run(rootSaga)
 
// rest unchanged