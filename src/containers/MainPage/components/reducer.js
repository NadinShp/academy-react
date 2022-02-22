import { createReducer } from "@reduxjs/toolkit";
import {increment, decrement} from './actions';

const counter = createReducer(0, {
    [increment]: (state, {payload})=>state+payload,
    [decrement]: (state, {payload})=>state-payload,
})

export default counter;
