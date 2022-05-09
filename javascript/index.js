const person = 
{
    firstName: "FirstName",
    lastName: "LastName",
    age: 100
}
console.log('javascript object person:')
console.log(person);

let json = '{"firstName":"FirstName", "lastName":"LastName", "age":100}';
console.log('json format person:')
console.log(json);

const personJSON = JSON.parse(json);
console.log('javascript object json.parse json:')
console.log(personJSON);

let jsonPerson = JSON.stringify(person);
console.log('json format json stringify person:')
console.log(jsonPerson);

const values = [2, 4, 6, 8, 10, 12];
console.log('array of numbers:')
console.log(values);

let jsonNumbers = '[2, 4, 6, 8, 10, 12]';
console.log('json format of array of numbers:')
console.log(jsonNumbers);

const arrayFromJson = JSON.parse(jsonNumbers);
console.log('array of numbers from json.parse jsonNumbers:');

for (let i = 0; i < arrayFromJson.length; i ++){

    console.log(arrayFromJson[i]);

}


const colors = ["white", "red", "blue", "green", "pink", "yellow"];

console.log('colors / for loop:');
for (let i = 0; i < colors.length; i ++){
    
    console.log(colors[i]);
}

console.log('colors / foreach / index:');
for (let index in colors) {

    console.log(index + ': ' + colors[index]);
}

console.log('colors / foreach / element:');
for (let color of colors) {

    console.log(color);
}

console.log('colors / array.forEach / element:');
colors.forEach((color) => {

    console.log(color);
});

console.log('rotate array:')
function rotateArrayToRight (baseArray, steps) {

    for (let i = 0; i < steps; i++) {

        baseArray.unshift(baseArray.pop());
    }

    return baseArray;

}
console.log('original array: ' + colors);
const rotatedArray = rotateArrayToRight(colors, 2);
console.log('rotated array: ' + rotatedArray);


function reduceArrayFromIndex (array) {

    const summ = array.reduce((summ, currentValue) => {
        return summ + currentValue;
    }, 50);
    console.log('summ: ' + summ);

}
const nms = [2, 4, 6, 8, 10, 12];
reduceArrayFromIndex(nms);

console.log('return array from number:')
function returnArrayFromNumber (number) {
    const createdArray = [];
    const shiftedArray = [];

    for (let i = 0; i < number; i++) {
        createdArray.push(i);
    }
    for (let i = createdArray.length; i >= 0; i--) {
        shiftedArray.push(i);
    }
    const resultArray = [...createdArray, ...shiftedArray]
    return resultArray;
}
console.log('result array: ' + returnArrayFromNumber(8));


console.log('array of strings from multidimensional array:')
var myZoo = [
    ["King Kong", ["gorilla", 42]],
    ["Nemo", ["fish", 5]],
    ["Punxsutawney Phil", ["groundhog", 11]]
  ];

function zooInventory (input) {

    let list = "";

    const items = [];

    for (let i = 0; i < input.length; i++) {

        list += input[i];

    }

    let result1 = list.slice(0, 20);
    let result2 = list.slice(20, 31);
    let result3 = list.slice(31);

    const result4 = result1.split(',');
    const result5 = result2.split(',');
    const result6 = result3.split(',');

    let item1 = ( result4[0] + " " + result4[1] + " is " + result4[2] )
    let item2 = ( result5[0] + " " + result5[1] + " is " + result5[2] )
    let item3 = ( result6[0] + " " + result6[1] + " is " + result6[2] )

    items.push(item1, item2, item3);
    console.log(items);
    
}

zooInventory(myZoo);

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
