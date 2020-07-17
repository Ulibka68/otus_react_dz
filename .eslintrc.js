module.exports = {
    env: {
        browser: true,
        es2020: true,
        jest: true
    },
    extends: [
        // Базовые правила для TypeScript
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended",
    ],
    parser: "@typescript-eslint/parser",

    parserOptions: {
        // Движку нужен проект TS для правил с типами
        "project": "tsconfig.json",
        "tsconfigRootDir": ".",
        "ecmaVersion": 2020,
    },
// Плагин с наборами правил для TypeScript
    plugins : [
        "@typescript-eslint",
        "prettier",
    ],
    rules : {
        'no-console': process.env.NODE_ENV === 'production' ?  ["error", { allow: ["warn", "error"] }] : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        "prettier/prettier": "warn",
    }
};
