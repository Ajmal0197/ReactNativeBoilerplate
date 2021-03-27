import { all, fork } from 'redux-saga/effects';
import watchAuthSaga from './authSaga'

// Redux Saga: Root Saga
export function* rootSaga() {
    yield all([
        fork(watchAuthSaga),
    ]);
};