const numbers = [2, 4, 6, 8];


let squareNumbers = numbers.map((number) => {
    const result = Math.pow(number, 2);

    return result;
})
console.log('square: ' + squareNumbers);


(function (num_A, num_B) 
{
    let num_C = num_A + num_B;

    console.log('summ: ' + num_C);
}
)(10, 20);


const timesTwo = (number) => {

    return number * 2;
}

console.log('result:' + timesTwo(10));
var task3 = 'var global scope';
let task4 = 'let global scope';

function testJsVariableScope () {

    for(let i = 0; i < 4; i ++){
        var task1 = 'var block scope';
        let task2 = 'let block scope';
        
    }

    var task5 = 'var local scope';
    let task6 = 'let local scope';

    console.log(task1);
    // console.log(task2);

    console.log(task3);
    console.log(task4);

};
testJsVariableScope();

// console.log(task5);
// console.log(task6);
