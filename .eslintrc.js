module.exports = {
  extends: "airbnb-base",
  env: {
    "node": true,
    "mocha": true
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    'func-names': "off",
    "object-curly-newline": ['error', {
      minProperties: 10, multiline: true, consistent: true,
    }],
    "camelcase": "off",
    "no-param-reassign": "off",
    "no-plusplus": "off",
    "class-methods-use-this": "off"
  }
}
