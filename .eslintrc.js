module.exports = {
    env: {
        browser: true,
        es2020: true,
        jest: true
    },
    extends: [
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended",
        // Базовые правила для TypeScript
        "plugin:@typescript-eslint/recommended",
        // Правила TS, требующие инфо о типах
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    parser: "@typescript-eslint/parser",

    parserOptions: {
        // Движку нужен проект TS для правил с типами
        "project": "tsconfig.json",
        "tsconfigRootDir": ".",
        "ecmaVersion": 2020,
        "ecmaFeatures": {
            "jsx": true
        }
    },
// Плагин с наборами правил для TypeScript
    plugins : [
        "@typescript-eslint",
        "prettier",
        "promise",
    ],
    rules : {
        'no-console': process.env.NODE_ENV === 'production' ?  ["error", { allow: ["warn", "error"] }] : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        "prettier/prettier": "warn",
    }
};


// Configuring Rules
// ESLint comes with a large number of rules. You can modify which rules your project uses either using configuration comments
// or configuration files. To change a rule setting, you must set the rule ID equal to one of these values:
// "off" or 0 - turn the rule off
// "warn" or 1 - turn the rule on as a warning (doesn't affect exit code)
// "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)

// To configure rules inside of a file using configuration comments, use a comment in the following format:
/* eslint eqeqeq: "off", curly: "error" */


// To temporarily disable rule warnings in your file, use block comments in the following format:
    /* eslint-disable */
    // alert('foo');
/* eslint-enable */

// To disable multiple rules on a specific line:
// alert('foo'); // eslint-disable-line no-alert, quotes, semi