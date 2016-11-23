import { fetchAbout, fetchJobs } from './api'
import { call, put } from 'redux-saga/effects'
import { takeLatest } from 'redux-saga'

function* fetchAboutSaga() {
  try {
    const data = yield call(fetchAbout);
    yield put({type: 'FETCH_ABOUT_SUCCESS', data})
  } catch (error) {

  }
}

export function* aboutSaga() {
  yield [
    takeLatest('FETCH_ABOUT', fetchAboutSaga)
  ]
}

function* fetchJobsSaga() {
  try {
    const data = yield call(fetchJobs);
    yield put({type: 'FETCH_JOBS_SUCCESS', data})
  } catch (error) {

  }
}

export function* jobsSaga() {
  yield [
    takeLatest('FETCH_JOBS', fetchJobsSaga)
  ]
}
