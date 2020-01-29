/* eslint-disable react-hooks/rules-of-hooks */
import { injectReducerSaga } from 'app/components/reducerSagaImport';

import { KEY_REDUCER_SAGA } from './saga/const';

import reducerLogin from './saga/reducer';

import sagaLogin from './saga/saga';

const injectLoginSaga = () => injectReducerSaga(KEY_REDUCER_SAGA, reducerLogin, sagaLogin);

export default injectLoginSaga;
