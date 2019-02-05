# Number Formatter

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

    npm lint
    npm test


Steps done:

    git init
    git push origin
    npm login
    npm publish
    npm install --save <number-formatter>
    npm unpublish

Supported steps:

    travis init
    travis enable
    npx eslint --init
