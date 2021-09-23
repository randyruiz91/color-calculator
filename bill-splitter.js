const prompt = require('prompt-sync')();

const person1 = Number(prompt('How much did person 1 pay? '));
const person2 = Number(prompt('How much did person 2 pay? '));

const bill = person1 + person2;

const split = bill / 2;

const owes1 = bill - person1;
const owes2 = bill - person2;

if (person1 === person2) {
    console.log ('nobody owes');
    else if (person1 < bill) {
        console.log('person 1 owes $ ',owes1);
    }
    else if (person2 < bill) {
        console.log('person 2 owes $ ', owes2);
    }
    else {
        console.log('error');
    }
}