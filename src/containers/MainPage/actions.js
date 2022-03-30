// import { createAction } from '@reduxjs/toolkit';

// const showLoader = createAction('APP/SHOW_LOADER');
// const hideLoader = createAction('APP/HIDE_LOADER');
// const showAlert = createAction('APP/SHOW_ALERT');
// const hideAlert = createAction('APP/HIDE_ALERT');
// const requestPeople = createAction('REQUEST_ACTION');

// export {showLoader, hideLoader, showAlert, hideAlert, requestPeople};

import {asyncActionsCreator} from '../../global/redux';
import GET_MAIN_PAGE_DATA from './constants';

export const getMainPageData = asyncActionsCreator(GET_MAIN_PAGE_DATA);