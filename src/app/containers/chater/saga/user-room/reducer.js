/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import produce from 'immer';
import * as nameAction from './action';

export const initialState = {
    error: null,
    userRooms: null,
    roomUsers: null,
    isLoading: false,
    userRoomUpdated: null,
    userRoomAdded: null,
};

const userRoomReducer = createReducer(initialState, {
    [nameAction.userRoomAddCall]: produce(draft => {
        draft.isLoading = true;
        return draft;
    }),
    [nameAction.roomUserSuccess]: produce((draft, action) => {
        const { payload } = action;
        const { userRooms } = action.payload.data;
        draft.roomUsers = userRooms;
        draft.isLoading = payload.loading;
        draft.error = initialState.error;
        return draft;
    }),
    [nameAction.roomUserFailed]: produce((draft, action) => {
        const { payload } = action;
        draft.roomUsers = initialState.userRooms;
        draft.isLoading = initialState.isLoading;
        draft.error = payload;
        return draft;
    }),
    [nameAction.userRoomsSuccess]: produce((draft, action) => {
        const { payload } = action;
        const { userRooms } = action.payload.data;
        draft.userRooms = userRooms;
        draft.isLoading = payload.loading;
        draft.error = initialState.error;
        return draft;
    }),
    [nameAction.userRoomsFailed]: produce((draft, action) => {
        const { payload } = action;
        draft.userRooms = initialState.userRooms;
        draft.isLoading = initialState.isLoading;
        draft.error = payload;
        return draft;
    }),
    [nameAction.userRoomUpdatedSuccess]: produce((draft, action) => {
        const { updateUserRoom } = action.payload.data;
        draft.error = initialState.error;
        draft.userRoomUpdated = updateUserRoom;
        return draft;
    }),
    [nameAction.userRoomUpdatedFailed]: produce((draft, action) => {
        const { payload } = action;
        draft.error = payload.error;
        draft.userRoomUpdated = initialState.userRoomUpdated;
        return draft;
    }),
    [nameAction.userRoomAddedSuccess]: produce((draft, action) => {
        const { addUserRoom } = action.payload.data;
        draft.error = initialState.error;
        draft.userRoomAdded = addUserRoom;
        return draft;
    }),
    [nameAction.userRoomAddedFailed]: produce((draft, action) => {
        const { payload } = action;
        draft.error = payload.error;
        draft.userRoomAdded = initialState.userRoomAdded;
        return draft;
    }),
});

export default userRoomReducer;
