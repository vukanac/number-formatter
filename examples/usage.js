/* eslint no-console: "off" */

/*
 * $ node usage.js
 * 35666 is formated as 35,666
 */

const numFormatter = require('@vukanac/number-formatter');

const number = 35666;
const formattedNum = numFormatter(number);

console.log(`${number} is formated as ${formattedNum}`);
