//root saga là điểm bắt đầu, là 1 generator function
//điều phối tất cả saga, khởi động tất cả các saga để chạy nền

import { fork, take, call, put } from 'redux-saga/effects';
import * as taskTypes from './../constants/task';
import { getListTask } from './../apis/task';
import { STATUS_CODE } from './../constants/index';
import { fetchListTaskFailed, fetchListTaskSuccess } from './../actions/task';


/**
 * VÍ DỤ VỀ REDUX-SAGA, miêu tả rõ quy trình của 1 công việc
 * B1: Thực thi action fetch task
 * B2: Gọi api
 *  B2.1: Hiển thị thanh tiến trình (loading)
 * B3: Kiểm tra status code
 * Nếu thành công...
 * Nếu thất bại...
 * B4: Tắt loading
 * B5: Thực thi các công việc tiếp theo
 */

//fork rẻ nhánh các function

function* watchFetchListTaskAction() {
  while(true) {                                     //dùng vòng lặp vô tận để take khi nào cũng được lắng nghe

    yield take(taskTypes.FETCH_TASK);               //take chạy khi action được dispatch
    //---đoạn code từ đây trở đi bị dừng BLOCK---//

    const resp = yield call(getListTask);           //call là 1 blocking, khi action được gọi thì mới thực thi và block cho đến khi call xong
    //---BLOCK cho đến khi call xong--//
    console.log('resp:', resp);
    const { status, data } = resp;

    if (status = STATUS_CODE.SUSCESS) {
      //dispatch action fetchListTaskSuccess
      yield put(fetchListTaskSuccess(status));
    } else {
      //dispatch action fetchListTaskFailed
      yield put(fetchListTaskFailed(data));
    }

  }
}

function* watchCreateTaskAction() {
  console.log('watchCreateTaskAction');

}

function* rootSaga() {
  yield fork(watchFetchListTaskAction);
  yield fork(watchCreateTaskAction);
}
export default rootSaga;