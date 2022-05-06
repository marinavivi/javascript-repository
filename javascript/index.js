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