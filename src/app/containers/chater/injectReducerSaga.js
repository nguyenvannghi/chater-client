/* eslint-disable react-hooks/rules-of-hooks */
import injectReducerSaga from 'app/components/reducerSagaImport';

import { ROOM_KEY_REDUCER_SAGA } from './saga/room/const';
import { MESSAGE_KEY_REDUCER_SAGA } from './saga/message/const';
import { USER_KEY_REDUCER_SAGA } from './saga/user/const';
import { USER_ROOM_KEY_REDUCER_SAGA } from './saga/user-room/const';

import reducerRoom from './saga/room/reducer';
import reducerMessage from './saga/message/reducer';
import reducerUser from './saga/user/reducer';
import reducerUserRoom from './saga/user-room/reducer';

import sagaRoom from './saga/room/saga';
import sagaMessage from './saga/message/saga';
import sagaUser from './saga/user/saga';
import sagaUserRoom from './saga/user-room/saga';

const injectRoomSaga = () => injectReducerSaga(ROOM_KEY_REDUCER_SAGA, reducerRoom, sagaRoom);

const injectMessageSaga = () => injectReducerSaga(MESSAGE_KEY_REDUCER_SAGA, reducerMessage, sagaMessage);

const injectUserSaga = () => injectReducerSaga(USER_KEY_REDUCER_SAGA, reducerUser, sagaUser);

const injectUserRoomSaga = () => injectReducerSaga(USER_ROOM_KEY_REDUCER_SAGA, reducerUserRoom, sagaUserRoom);

export { injectRoomSaga, injectMessageSaga, injectUserSaga, injectUserRoomSaga };
