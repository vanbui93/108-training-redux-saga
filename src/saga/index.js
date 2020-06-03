//root saga là điểm bắt đầu, là 1 generator function
//điều phối tất cả saga, khởi động tất cả các saga để chạy nền

import {fork} from 'redux-saga/effects';

//fork rẻ nhánh các function

function* watchFetchListTaskAction() {
  console.log('watchFetchListTaskAction');

}

function* watchCreateTaskAction(){
  console.log('watchCreateTaskAction');

}

function* rootSaga() {
  yield fork(watchFetchListTaskAction);
  yield fork(watchCreateTaskAction);
}
export default rootSaga;