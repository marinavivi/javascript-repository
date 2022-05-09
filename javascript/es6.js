// let, const, var
let testLet = 'hello';
const testConst = 
{
    carName: "CarName",
    yearOfProduction: 2020
}
var testVar = 'hello';

// scope
{
    var x = 2;
}
console.log(x);
{
    let y = 2;
}
// console.log(y);

function myFunction() {
    var z = 2;
}
// console.log(z);

function myFunction1() {
    let w = 2;
}
// console.log(w);

// es5
console.log('es5:');
function PersonJs (firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.writeFullName = function() {
    console.log('full name: ' + this.firstName + ' ' + this.lastName);
    }
    this.changeAge = function (age) {
        this.age = age;
    };
}
let person = new PersonJs ("FirstName", "LastName", 100);
console.log(person);
person.firstName = "NewName";
console.log('new name: ' + person.firstName);
console.log('old age: ' + person.age);
person.changeAge(120);
console.log('new age: ' + person.age);
person.writeFullName();


//es6
console.log('es6:');
class Person {
    constructor (firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get age(){
        return this._age;
    }
    set age(age){
        this._age = age;
    }
    writeFullName() {
        console.log('full name: ' + this.firstName + ' ' + this.lastName);
    }
    static sayHello (name){
        console.log('hello ' + name);
    }
}
let person1 = new Person ("FirstName", "LastName", 100);
console.log(person1);
console.log('old age: ' + person1.age);
person1.age = 120;
console.log('new age: ' + person1.age);
person1.writeFullName();

Person.sayHello(person1.firstName);

class Doctor extends Person {
    constructor (firstName, lastName, age, titule){
        super(firstName, lastName, age);
        this.titule = titule;
    } 
}
let doctor1 = new Doctor ("FirstName", "LastName", 100, "dr");
console.log(doctor1);

// es5 functions
function myFunction (num_A, num_B) {
    return (num_A + num_B);
}
let result1 = myFunction(2, 2);
console.log('result es5 function: ' + result1);

// anonymous function
const myAnonymousFunction = function (num_A, num_B) {return num_A + num_B};
let result2 = myAnonymousFunction(4, 4);
console.log('result anonymous function: ' + result2);

// self invoking function
(function (num) {
    console.log("result self invoking function: " + num); 
  })(100);

// arrow functions
const myArrowFunction = (num_A, num_B) => {
    return (num_A + num_B);
}
let result3 = myArrowFunction(8, 8);
console.log('result arrow function: ' + result3);

// async/await
const myAsyncFunction = async () => {
    const result = await new Promise((resolve, reject) => setTimeout(resolve, 1000, 'hello'));
    console.log('result: ' + result);
}
myAsyncFunction();

// then/catch
const myThenFunction = () => {
    const myPromise = new Promise((resolve, reject) => setTimeout(resolve, 1000, 'hello'));
    myPromise
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })
    
}
myThenFunction();

