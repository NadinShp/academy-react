import { createReducer } from "@reduxjs/toolkit";
// import {showLoader, hideLoader, showAlert, hideAlert} from './actions';
import * as actions from './actions';

const initialState = {
    loading: false,
    error: null,
    data: null,
};

const reducer = createReducer(initialState, {
    [actions.getMainPageData.REQUEST]: (state, action) => {
        console.log("SUCCESS", action);
        state.loading = true;
        state.error = null;
    },
    [actions.getMainPageData.SUCCESS]: (state) => {
        state.loading = false;
        state.error = false;
    },
    [actions.getMainPageData.ERROR]: (state) => {
        state.loading = false;
        state.error = true;
    }
});

const mainPageData = (state) => state.mainPageReducer.data;

const selectors = {
    mainPageData
};
export {initialState, selectors}
export default reducer;
// const loader = createReducer(false, {
//     [showLoader]: ()=>true,
//     [hideLoader]: ()=>false,
// })

// const alert = createReducer(null, {
//     [showAlert]: (_, {payload})=>payload,
//     [hideAlert]: ()=>null,
// })
