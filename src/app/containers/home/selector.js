import { createSelector } from 'reselect';

import { KEY_REDUCER_SAGA } from './const';
import { initialState } from './reducer';

const selectEmployeeList = state => state[KEY_REDUCER_SAGA] || initialState;

const makeSelectEmployee = () => createSelector(selectEmployeeList, selectEmployeeList => selectEmployeeList.data);

const makeSelectError = () => createSelector(selectEmployeeList, selectEmployeeList => selectEmployeeList.error);

export { makeSelectEmployee, makeSelectError };
