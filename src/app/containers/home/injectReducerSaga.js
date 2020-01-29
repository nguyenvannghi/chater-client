/* eslint-disable react-hooks/rules-of-hooks */
import injectReducerSaga from 'app/components/reducerSagaImport';

import { KEY_REDUCER_SAGA } from './const';
import reducerEmployee from './reducer';
import sagaEmployee from './saga';

const injectRedSaga = () => injectReducerSaga(KEY_REDUCER_SAGA, reducerEmployee, sagaEmployee);

export default injectRedSaga;
