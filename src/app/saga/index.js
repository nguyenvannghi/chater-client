import { all, fork } from 'redux-saga/effects';

import accSaga from 'app/containers/signin/saga/saga';

export default function* rootSaga() {
    yield all([fork(accSaga)]);
}
