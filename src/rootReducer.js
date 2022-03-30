import {combineReducers} from 'redux';
import mainPageReducer from './containers/MainPage/reducer';

const rootReducer = combineReducers({
    mainPageReducer,
});

export default rootReducer;