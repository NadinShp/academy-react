import { createAction } from '@reduxjs/toolkit';

const increment = createAction('INCREMENT');
const decrement = createAction('DECREMENT');
const incrementAsync = createAction('INCREMENT_ASYNC');

export {increment, decrement, incrementAsync};