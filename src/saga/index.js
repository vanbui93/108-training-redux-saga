//root saga là điểm bắt đầu, là 1 generator function
//điều phối tất cả saga, khởi động tất cả các saga để chạy nền

import {fork,take,call} from 'redux-saga/effects';
import * as taskTypes from './../constants/task';
import { getListTask } from './../apis/task';
import { STATUS_CODE } from './../constants/index';

//fork rẻ nhánh các function

function* watchFetchListTaskAction() {
  yield take(taskTypes.FETCH_TASK);
  //---đoạn code từ đây trở đi bị dừng BLOCK---//

 const resp = yield call(getListTask);  //call là 1 blocking, khi action được gọi thì mới thực thi và block cho đến khi call xong
  //---BLOCK cho đến khi call xong--//
  console.log('resp:', resp);
  const {status, data} = resp;
  if(status = STATUS_CODE.SUSCESS) {
    //dispatch action fetchListTaskSuccess
  } else {
     //dispatch action fetchListTaskFailed
  }
}

function* watchCreateTaskAction(){
  console.log('watchCreateTaskAction');

}

function* rootSaga() {
  yield fork(watchFetchListTaskAction);
  yield fork(watchCreateTaskAction);
}
export default rootSaga;