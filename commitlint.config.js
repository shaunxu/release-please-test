module.exports = {
    extends: [
        '@commitlint/config-conventional'
    ],
    rules: {
        'type-enum': [
            2,
            'always',
            ['feat', 'fix', 'docs', 'refactor', 'test', 'bump']
        ],
        'scope-empty': [
            2,
            'never'
        ],
        'references-empty': [
            2,
            'never'
        ],
        'header-max-length': [
            0,
            'always',
            1024
        ],
        'body-max-line-length': [2, 'always', 1000]
    }
}
