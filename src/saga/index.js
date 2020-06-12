//root saga là điểm bắt đầu, là 1 generator function
//điều phối tất cả saga, khởi động tất cả các saga để chạy nền

import { call, delay, fork, put, select, take, takeLatest, takeEvery } from 'redux-saga/effects';
import { fetchListTaskFailed, fetchListTaskSuccess, filterTaskSuccess, addTaskFailed } from './../actions/task';
import { hideLoading, showLoading } from './../actions/ui';
import { getListTask, addTask } from './../apis/task';
import { STATUS_CODE, STATUSES } from './../constants/index';
import * as taskTypes from './../constants/task';
import { addTaskSuccess } from './../actions/task';
import { hideModal } from '../actions/modal';


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
  while (true) {                                     //dùng vòng lặp vô tận để take khi nào cũng được lắng nghe

    yield take(taskTypes.FETCH_TASK);               //take chạy khi action được dispatch
    //---đoạn code từ đây trở đi bị dừng BLOCK---//

    yield put(showLoading());

    const resp = yield call(getListTask);           //call là 1 blocking, khi action được gọi thì mới thực thi và block cho đến khi call xong
    //---BLOCK cho đến khi call xong--//
    console.log('resp:', resp);
    const { status, data } = resp;

    if (status === STATUS_CODE.SUSCESS) {
      //dispatch action fetchListTaskSuccess
      yield put(fetchListTaskSuccess(data));
    } else {
      //dispatch action fetchListTaskFailed
      yield put(fetchListTaskFailed(data));
    }
    yield delay(500);
    yield put(hideLoading());

  }
}

function* filterTaskSaga({ payload }) {
  yield delay(500);     //sau khi người dùng nhập đến kí tự cuối cùng, nữa giây sau thì mới thực hiện lấy kết quả
  const { keyword } = payload;
  const list = yield select(state => state.task.listTask);
  const filteredTask = list.filter(task =>
    task.title
      .trim()
      .toLowerCase()
      .includes(keyword.trim().toLowerCase()),
  );
  yield put(filterTaskSuccess(filteredTask));   //dispatch action filterTaskSuccess
}

function* addTaskSaga({ payload }) {
  const { title, description } = payload;
  yield put(showLoading());
  const resp = yield call(addTask, {
    title,
    description,
    status: STATUSES[0].value,
  });
  const { data, status } = resp;
  if (status === STATUS_CODE.CREATED) {
    yield put(addTaskSuccess(data));
    yield put(hideModal());
  } else {
    yield put(addTaskFailed(data));
    yield put(hideModal());
  }
  yield delay(1000);
  yield put(hideLoading());
}

function* rootSaga() {
  yield fork(watchFetchListTaskAction);
  yield takeLatest(taskTypes.FILTER_TASK, filterTaskSaga);               //taskLatest lắng nghe action
  yield takeEvery(taskTypes.ADD_TASK, addTaskSaga);
}
export default rootSaga;