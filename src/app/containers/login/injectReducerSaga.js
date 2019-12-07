/* eslint-disable react-hooks/rules-of-hooks */
import { injectReducerSaga } from 'app/components/reducerSagaImport';
import { KEY_REDUCER_SAGA } from './const';
import reducerLogin from './reducer';
import sagaLogin from './saga';

const injectRedSaga = () => injectReducerSaga(KEY_REDUCER_SAGA, reducerLogin, sagaLogin);

export default injectRedSaga;
