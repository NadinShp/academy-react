import {createAction} from  '@reduxjs/toolkit';

/**
 * Use this helpers function to generate actions and types automatically
 * This will returna object generating 3 actions and 3 types:
 * param 'string' actions (example 'GET_DATA),
 * returns 'object' (example):
 * REGUEST: 'GET_DATA_REGUEST',
 * SUCCESS: 'GET_DATA_SUCCESS',
 * ERROR: 'GET_DATA_ERROR',
 * request: payload => ({type, payload, }), // type: GET_DATA_REGUEST
 * success: payload => ({type, payload, }), // type: GET_DATA_CUCCESS
 * error: payload => ({type, payload, }), // type: GET_DATA_ERROR
 */
export const asyncActionsCreator = action => {
    const values = ['SUCCESS', 'ERROR', 'REQUEST'];
    const types = values.reduce((acc, value) => {
        const type = `${action}_${value}`;
        acc[value] = type;
        acc[value.toLowerCase()] = createAction(type);
        return acc;
    }, {});
    return types;
};