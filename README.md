This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## Sử dụng MATERIAL-UI
Dùng https://material-ui.com/ 
để build giao diện nhanh hơn
## // with npm

```sh 
npm install @material-ui/core
```

## install Roboto Font

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
```

## Font Icons

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
```


## install icon font

```sh 
npm install @material-ui/icons
```

## Available Scripts

In the project directory, you can run:

```sh
npm start
```

## Install Eslint


Use eslint to clean code https://eslint.org/docs/user-guide/getting-started
```html
https://github.com/yannickcr/eslint-plugin-react
```

Cài đặt tất cả các packages thích nghi với môi trường dự án
`Browser`,`Babel`,`Prettier`,`React eslint`,

```html
https://www.npmjs.com/package/eslint-config-env
```

```sh
npm install eslint --save-dev
```
Then install extension ESlint on Visual studio Code, This will highlight the errors

## Cấu hình ESlint 2 cách
* Sử dụng file tên: `eslinttrc.*`  (* là json, js, yaml)
* Thuộc tính eslintConfig trong file package.json
>Quy tắc
- 0: off
- 1: warn: cảnh báo, code vẫn chạy
- 2: error: lỗi, code dừng

## ESlint: Install babel-eslint 
>ESLint chỉ hổ trợ cho ECMAScript(ES) standard, babel giúp chuyển ES6 sang JS (ES là phiên bản mới ít dc browser hỗ trợ)

```html
https://github.com/babel/babel-eslint
```

```sh
$ npm install eslint babel-eslint --save-dev
```

## ESlint: Install airbnb
```html
https://www.npmjs.com/package/eslint-config-airbnb
```

```sh
npx install-peerdeps --dev eslint-config-airbnb
```
 
```html
https://github.com/airbnb/javascript/tree/master/react
```

## Install Prettier extension (visual studio code)
Prettier extension giúp format code về định dạng đúng như Eslint yêu cầu, vd dấu ' -> " 
=> tự động chuyển code về định dạng đúng
>Để kết hợp Prettier extension với eslint => trên visual studio code => File -> Preferences -> Setting -> search "Eslint" -> tích chọn　✔ integration

```html
https://github.com/prettier/eslint-config-prettier
```

```sh
npm install --save-dev --save-exact prettier
```

```sh
npm install --save-dev eslint-config-prettier
```

## Khai báo biến môi trường để không bị thông báo lỗi
env

## Install husky npm => hỗ trợ check eslint và prettier
>Nếu có lỗi xảy ra thì ko được commit

https://www.npmjs.com/package/husky

```sh
npm install husky --save-dev
```

## Install thêm lint-staged

```sh
npx mrm lint-staged
```
>Xem lại video 118

## Install EditorConfig extension
>Cài đặt editerConfig extension (trên visual studio code)
Dùng để thống nhất cấu hình cho code cho các member (vì có rất nhiều editor như subline, visual studio code)
vd indent: 2

xem thêm tại link https://editorconfig.org/
>Search editorconfig react : có thể lấy y chang về sử dụng

## Run json server
After create db.json file and create object

```sh
json-server db.json
```

## Tích hợp Redux
Tham khảo trang chủ redux
https://redux.js.org/api/applymiddleware

```sh
npm install redux react-redux redux-thunk --save
```

## Install Axios

```sh
$ npm install axios
```

xem thêm npmjs.com/package/axios

>xử lý trả về thành công hay thất bại, sử dụng `Interceptors`

```js
// Add a request interceptor
axios.interceptors.request.use(function (config) {
// Do something before request is sent
return config;
}, function (error) {
// Do something with request error
return Promise.reject(error);
});
// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
// Do something with response data
return response;
}, function (error) {
// Any status codes that falls outside the range of 2xx cause this function to trigger
// Do something with response error
return Promise.reject(error);
});
```

## Use BindActionCreators

Khi App của bạn quá lớn việc dispatch từng action rất bất tiện<br>
=> Vì thế có thể sử dụng **BindActionCreators** để chuyển tất các các action thành 1 **Object**.<br>
Và mỗi function trong **Object** sẽ được bao bởi 1 dispatch function cho bạn


## Install Toastify
Dùng để hiển thị thông báo https://www.npmjs.com/package/react-toastify

```sh	
npm install --save react-toastify
```


## Install Redux-Saga
Saga được gọi khi đăng kí theo dõi action
> Dùng để Xử lý lỗi middleware, trì hoãn dispatch
```sh
$ npm install --save redux-saga
```

Hàm **run** để chương trình con bắt đầu theo dõi các **action** <br>
cài đặt trong file `redux/configureStore.js`

```js
sagaMiddleware.run(mySaga)
```

## Side-Effect (Sử dụng redux-saga)

- Dùng để xử lý Side-Effect và các hoạt động không đồng bộ
- Là những tương tác của ứng dụng với thế giới bên ngoài: giao tiếp API, đọc ghi file, analytics event.
- Thường được xử lý ở action hoặc middleware
>Lưu ý: không xử lý ở reducer, vì reducer là pure function - hàm thuần túy

* Redux-saga sẽ clean code hơn, giải quyết các quy trình phức tạp, dài hạn<br>
Nếu app nhỏ thì nên dùng redux-thunk
* Điểm yếu : Phức tạp, nặng về xử lý, tốn time cho member mới vào team<br>

**Redux-saga**: sử dụng từ khóa **yield** và **genaretor**<br>
Trả về ilterator (lấy giá trị trả về dùng next())

**Iterators** <br>
- Yield trả về iterator có giá trị done là false
- Return trả về iterator có giá trị done là true

```js
function* helloGeneratorFunction() {  //ilterators (giống 1 array)
 yield 2019 //chỉ xuất hiện trong GeneratorFunction
 return "Tự học lập trình redux saga"
}

const result = helloGeneratorFunction();
console.log(result.next()); //=> done: false
console.log(result.next()); //=> done: true

```
Vòng lặp vô tận

```js
function* helloGeneratorFunction() {
  while (true) {
    yield "Tôi đang lắng nghe..."
  }
}
```

Generator trong generator sử dụng yield*
sử dụng yield* để nhường quyền cho 1 generator khác chạy

```js
function* printName() {
  yield 'redux saga'
}
function* hello() {
  yield 'Xin chào'
  yield* printName();
  yield '.Kết thúc.'
}

const iterator = hello();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
```

## Sử dụng Redux-saga Fork
- **Fork** giống như 1 bộ theo dõi, người theo dõi action, là 1 **generator function**
- Dùng để rẽ nhánh như if-else, switch-case
- Fork thuộc redux-saga/effects
- Mỗi fork là : non-blocking, có nghĩa là có thể kích hoạt nhiều bộ theo dõi cùng 1 lúc (dispatch nhiều action cùng lúc)

```js
function* watchFetchListTaskAction() {
  while (true) {  
    //somthings
  }
}
function* watchCreateTaskAction() {
  //somthings
}
function* rootSaga() {
  yield fork(watchFetchListTaskAction);
  yield fork(watchCreateTaskAction);
}
```

## Sử dụng Redux-saga Take
- **Take** chỉ chạy khi action được dispatch
- Dùng để phản hồi các action khi action được dispatch
- Fork thuộc redux-saga/effects
- Lệnh take sẽ được kích hoạt và tham gia vào saga khi một action được dispatch. Tạm dừng đến khi nhận action.
- Là blocking

```js
yield take(taskTypes.FETCH_TASK); 
```

## Sử dụng Redux-saga Call
- Thường sử dụng để **request API, call API**
- Là blocking
- Giống thực thi 1 function. Trả về Promise và sẽ tạm dừng saga cho đến khi promise được resolved

```js
const resp = yield call(getListTask);    //getListTask gọi api  ./../apis/task
```

## Sử dụng Redux-saga Put
- Dùng để **dispatch action**
- Là non-blocking (có thể put cùng lúc nhiều action)

```js
yield put(showLoading());   //dispatch action SHOW_LOADING
```
## Sử dụng Redux-saga Delay
- Là blocking
- Để chặn thực thi trong 1 khoảng thời gian miliseconds

```js
function* watchFetchListTaskAction() {
  while (true) {                                     //dùng vòng lặp vô tận để take khi nào cũng được lắng nghe
    yield delay(500);
  }
}
```

## Sử dụng Redux-saga TakeLatest
- Thay thế cho fork: **Là phiên bản của fork** đã được bổ sung
- Hủy bỏ quy trình cũ khi có một quy trình mới bắt đầu.
- Nếu thực hiện một loạt các action, takeLatest chỉ thực thi và lấy kết quả của action cuối cùng.
- Không cần vòng lặp vô hạn

```js
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

function* rootSaga() {
  yield takeLatest(taskTypes.FILTER_TASK, filterTaskSaga);               //taskLatest lắng nghe action
}
```

## Sử dụng Redux-saga Select
- **Lấy data** từ store tại saga

```js
const list = yield select(state => state.task.listTask);
```

## Sử dụng Redux-saga TakeEvery
- TakeEvery sử dụng giống TakeLatest, nhưng TakeEvery chạy ngay lập tực nếu được kích hoạt
- không cần tính số lần chạy
- không  biết là action trước đó đã chạy xong chưa
```js
yield takeEvery(taskTypes.FILTER_TASK, filterTaskSaga);
```
## Sử dụng Redux Form
Xem chi tiết trên trang chủ https://redux-form.com/8.3.0/ <br>
cài đặt
```sh
npm install redux-form
```

Làm theo các bước ở đây https://redux-form.com/8.3.0/docs/gettingstarted.md/ <br>
- Trong reducer 

```js
import { reducer as formReducer } from 'redux-form'
const rootReducer = combineReducers({
  // ...your other reducers here
  // you have to pass formReducer under 'form' key,
  // for custom keys look up the docs for 'getFormState'
  form: formReducer
})
```

- Trong component form (TaskForm)

```js
class TaskForm extends Component {

handleSubmitForm = (data) => {
  console.log('data',data);
}

render() {
<form onSubmit= { handleSubmit(this.handleSubmitForm) } >
    {/* form body*/}
</form>
}

const withReduxForm = reduxForm({
  form: 'formName'
});

export default compose {
  {/* other component*/}
  withReduxForm,
)(TaskForm);
}

}
```
## Redux-form: Validation - Ràng buộc dữ liệu
Xem thêm https://redux-form.com/8.2.2/examples/syncvalidation/ <br>

Synchronous Validation Example - Thực hiện ở phía client
Có 2 cách 
- Điền validaion cho từng Field (Field-Level Validation Example)
- Truyền vào 1 object và validation toàn bộ ở reduxForm (Synchronous Validation Example)

1. Cách 1: Điền validaion cho từng Field (Field-Level Validation Example)
```js
required = (value) => {
  let error = 'Vui lòng nhập tiêu đề';
  if (value !== null && typeof value !== 'undefined' && value.trim() !== '') {
    error = null;
  }
  return error;
}

minLengths = value => {
  let error = null;
  if (value && value.length < 5) {
    error = 'Tiêu đề phải từ 5 kí tự';
  }
  return error;
}

<Field
  //something
  validate={this.required, this.minLengths}
/>
```

Runs the app in the development mode.<br />
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.