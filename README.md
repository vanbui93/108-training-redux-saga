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

Runs the app in the development mode.<br />
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.
