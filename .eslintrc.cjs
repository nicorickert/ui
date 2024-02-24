module.exports = {
    root: true,
    env: { browser: true, es2021: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:storybook/recommended',
        'plugin:prettier/recommended',
        'plugin:jsx-a11y/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs', '!.storybook'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint',
        'eslint-plugin-simple-import-sort',
        'jsx-a11y'
    ],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'simple-import-sort/imports': [
            'error',
            {
                groups: [
                    // Packages `react` related packages come first.
                    ['^react', '^@?\\w'],
                    // Internal packages.
                    ['^(@|components)(/.*|$)'],
                    // Side effect imports.
                    ['^\\u0000'],
                    // Parent imports. Put `..` last.
                    ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
                    // Other relative imports. Put same-folder imports and `.` last.
                    ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
                    // Style imports.
                    ['^.+\\.?(css)$'],
                ],
            },
        ],
        'simple-import-sort/exports': 'error',
    },
}
