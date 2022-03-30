import {all, takeLatest, call, put} from 'redux-saga/effects';
import  MainPageService  from './service';
import * as actions from './actions';
import mapMainPageData from './helpers'

function* getNameFilms(filmsLink){
    try {
        const arrayWithNameFilms = [];
        for (let i=0; i<filmsLink.length; i++){
            arrayWithNameFilms.push((yield call(MainPageService.getFilms, filmsLink[i])).data.title);
        }
        return arrayWithNameFilms;
    } catch(error) {
        console.log('error ', error);
    }
}

export function* getMainPageDataSaga(){
    try{
        const response = yield call(MainPageService.getMainPageData);
        const films = response.data?.films;
        const mappedData = mapMainPageData(response.data);
        if(films) {
            mappedData.films = yield getNameFilms(films);
            console.log('mappedData: ', mappedData);
        }
        if(mappedData.films){
            yield put(actions.getMainPageData.success(mappedData));
        }
    } catch(error){
        console.log('error', error);
    };
}
export function* testSaga(){}

export function*  mainPageWatcherSaga(){
    yield all([
        takeLatest(actions.getMainPageData.REQUEST, getMainPageDataSaga),
        // takeLatest('TEST_ACTION',testSaga)
    ])
}