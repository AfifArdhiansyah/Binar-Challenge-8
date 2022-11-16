module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "no-useless-constructor": "error",
        "no-undef": "off",
        "camelcase": "warn",
        "no-unused-vars": "warn",
        "callback-return": ["warn", ["callback", "next"]],
    }
}
