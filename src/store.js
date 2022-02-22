import {combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import counter from './containers/MainPage/components/reducer';
import testReducer from './containers/TestPage/components/reducer';
import {incrementWatcher} from './containers/MainPage/components/saga';

const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({
    counter,
    test: testReducer,
})
const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV === 'development',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(incrementWatcher);
export default store;