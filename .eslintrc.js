module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "commonjs": true,
        "amd": true,
        "jquery": true,
        "prototypejs": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/recommended"
    ],
    // "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "plugins": [
        "vue"
    ],
    "parser": "vue-eslint-parser",
    "parserOptions": {
        "parser": "babel-eslint",
        "sourceType": "module"
    },
    "rules": {
        "for-direction": ["error"],
        "no-irregular-whitespace": ["warn"],
        "no-cond-assign": ["error"],
        "no-unreachable": ["error"],
        "no-func-assign": ["error"],
        "array-callback-return": ["error"],
        "block-scoped-var": ["error"],
        "eqeqeq": ["error"],
        "no-alert": ["warn"],
        "no-else-return": ["warn"],
        "no-empty-function": ["warn"],
        "no-redeclare": ["error"],
        "no-self-assign": ["error"],
        "no-useless-return": ["error"],
        "no-unused-vars": ["error"],
        "no-use-before-define": ["error"],
        // because of categorical variables 'LG_CONFIG_XXX'
        "no-undef": ["off"]
    }
}