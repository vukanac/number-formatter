# Number Formatter (this is only a NPM Demo)

[![GitHub version](https://badge.fury.io/gh/vukanac%2Fnumber-formatter.svg)](https://badge.fury.io/gh/vukanac%2Fnumber-formatter)
[![Build Status](https://travis-ci.org/vukanac/number-formatter.svg?branch=master)](https://travis-ci.org/vukanac/number-formatter)
[![Coverage Status](https://coveralls.io/repos/github/vukanac/number-formatter/badge.svg?branch=master)](https://coveralls.io/github/vukanac/number-formatter?branch=master)
[![npm version](https://badge.fury.io/js/%40vukanac%2Fnumber-formatter.svg)](https://badge.fury.io/js/%40vukanac%2Fnumber-formatter)

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


## Update NPM version

> The only way to update npm is to release a new version.

`npm` will not allow you to re-publish to the same version number.

With:

    npm version (patch|minor|major) -m "<commit message>"

    npm version patch -m "Version %s - add sweet badges"

`%s` = the new version number,

will create a new release by bumping the version in your `package.json`,
add a new commit and tag it with this release number.

> Note: Your Git working directory has to be clean before you can run `npm version`.

After bumping the version number

    git push --tags
    npm publish
