// npm install prompt-sync
// https://github.com/heapwolf/prompt-sync

const prompt = require('prompt-sync')();
 
const name = prompt('What is your name?');
console.log(`Hey there ${name}`);