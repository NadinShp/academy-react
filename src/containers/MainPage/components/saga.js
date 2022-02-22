import {put, takeEvery} from 'redux-saga/effects';
import {incrementAsync, increment} from '../components/actions';

const delay = (ms) => new Promise(res=>setTimeout(res, ms));

function* incrementWorker(){
 yield delay (1000);
 yield put(increment())
}

export function* incrementWatcher(){
    yield takeEvery(incrementAsync, incrementWorker)
}