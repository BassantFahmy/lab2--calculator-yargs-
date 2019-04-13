// console.log(process.argv);

// const operation = require('./operations/operators');
// const params = process.argv.slice(2);

// const coi = params.findIndex(items => items.startsWith('--'));




// const coperation = params.splice(coi, 1).map(e => e.substring(2))[0];
// const numbers = params.map(e => Number(e));

// let func = operation[coperation];

// console.log(func(...numbers))

console.log(process.argv);

const operation = require('./operations/operators');
const params = process.argv.slice(2);

const coi = params.findIndex(items => items.startsWith('--'));




const coperation = params.splice(coi, 1).map(e => e.substring(2))[0];
// const numbers = params.map(e => Number(e));

const yargs = require('yargs')


 let argv = yargs.array('add').array('sub').argv

const numbers = argv.add;
// const numbers = argv.sub;


let func = operation[coperation];

console.log(func(...numbers))

