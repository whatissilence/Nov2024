import { all, put, takeEvery } from 'redux-saga/effects';
import { pause3sec } from '../../shared/utils.tsx'
import { decrement, decrementAsync, increment, incrementAsync } from './counterSlice.ts'


function* incrementSaga() {
  yield pause3sec();
  yield put(increment());
}

function* decrementSaga() {
  yield pause3sec();
  yield put(decrement());
}


function* watchCounterSaga() {
  yield takeEvery(incrementAsync.type, incrementSaga);
  yield takeEvery(decrementAsync.type, decrementSaga);
}

export default function* rootSaga() {
  yield all([watchCounterSaga()])
}


