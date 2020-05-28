//https://github.com/yannickcr/eslint-plugin-react
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
  }
};