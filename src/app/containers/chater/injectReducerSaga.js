/* eslint-disable react-hooks/rules-of-hooks */
import { injectReducerSaga } from 'app/components/reducerSagaImport';

import { ROOM_KEY_REDUCER_SAGA } from './saga/room/const';
import { MESSAGE_KEY_REDUCER_SAGA } from './saga/message/const';

import reducerRoom from './saga/room/reducer';
import reducerMessage from './saga/message/reducer';

import sagaRoom from './saga/room/saga';
import sagaMessage from './saga/message/saga';

const injectRoomSaga = () => injectReducerSaga(ROOM_KEY_REDUCER_SAGA, reducerRoom, sagaRoom);

const injectMessageSaga = () => injectReducerSaga(MESSAGE_KEY_REDUCER_SAGA, reducerMessage, sagaMessage);

export { injectRoomSaga, injectMessageSaga };
