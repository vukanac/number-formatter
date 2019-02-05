# Number Formatter (this is only a NPM Demo)

[![Build Status](https://travis-ci.org/vukanac/number-formatter.svg?branch=master)](https://travis-ci.org/vukanac/number-formatter)

A small library that adds commas to numbers


## Installation

    npm install @vukanac/number-formatter

## Usage

    var numFormatter = require('@vukanac/number-formatter');

    var formattedNum = numFormatter(35666);


Output should be `35,666`


## Tests

    npm test


## Contributing

All new functionality or changes must be linted and covered with unit tests.

    npm run lint
    npm test


Steps done:

    git init
    git push origin
    npm login
    npm publish
    npm install --save <number-formatter>
    npm unpublish

Supporting steps:

    hub create
    travis init
    travis enable
    npx eslint --init


## Troubleshooting

    npm publish

Required one time password (OTP) from 2FA enabled accounts.

It the result is:

    npm ERR! 402 Payment Required
     - PUT https://registry.npmjs.org/@<YOUR_USERNAME>%2fnumber-formatter
     - You must sign up for private packages

Run:

    npm publish --access=public

or change the scope from private (organisation) based on your username
to the global scope by changing the name in `package.json`:

    -  "name": "@<YOUR_USERNAME>/number-formatter",
    +  "name": "number-formatter-with-locale",
