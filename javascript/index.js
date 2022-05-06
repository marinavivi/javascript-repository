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
const numbers = [2, 4, 6, 8, 10, 12];
reduceArrayFromIndex(numbers);

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

