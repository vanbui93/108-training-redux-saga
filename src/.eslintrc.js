//https://github.com/yannickcr/eslint-plugin-react

//https://github.com/airbnb/javascript/tree/master/react

module.exports = {
  parser: "babel-eslint", //ESLint chỉ hổ trợ cho ECMAScript(ES) standard, babel giúp chuyển ES6 sang JS (ES là phiên bản mới ít dc browser hỗ trợ)
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  rules: {
    "semi": "error", //hiển thị error
    "quotes": ["error", "single"], //check dấu '' -> single or "" -> double ở cuối
    "react/prop-types": 1, //check PropTypes
    "react/jsx-max-props-per-line": 1 //chỉ 1 dòng 1 props
  },
  extends: [
    "some-other-config-you-use",
    "prettier",
    ["plugin:prettier/recommended"],
    ["env"]
  ],
  plugin:"prettier",
  env: {  //khai báo biến môi trường để không bị báo lỗi
    "browser": true,
    "node": true
  }
};