//root saga là điểm bắt đầu, là 1 generator function
//điều phối tất cả saga, khởi động tất cả các saga để chạy nền

import {fork,take} from 'redux-saga/effects';
import * as taskTypes from './../constants/task';

//fork rẻ nhánh các function

function* watchFetchListTaskAction() {
  yield take(taskTypes.FETCH_TASK);
  //---đoạn code từ đây trở đi bị dừng BLOCK---//
  console.log('take watchFetchListTaskAction');

}

function* watchCreateTaskAction(){
  console.log('watchCreateTaskAction');

}

function* rootSaga() {
  yield fork(watchFetchListTaskAction);
  yield fork(watchCreateTaskAction);
}
export default rootSaga;