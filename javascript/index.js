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
