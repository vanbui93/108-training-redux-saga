//root saga là điểm bắt đầu, là 1 generator function
//điều phối tất cả saga, khởi động tất cả các saga để chạy nền
function* rootSaga() {
  yield 'true';
  console.log('this is root saga');
}
export default rootSaga;