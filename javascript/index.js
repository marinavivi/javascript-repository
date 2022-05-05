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

const numbers = [2, 4, 6, 8, 10, 12];
console.log('array of numbers:')
console.log(numbers);

let jsonNumbers = '[2, 4, 6, 8, 10, 12]';
console.log('json format of array of numbers:')
console.log(jsonNumbers);

const arrayFromJson = JSON.parse(jsonNumbers);
console.log('array of numbers from json.parse jsonNumbers:');

for (let i = 0; i < arrayFromJson.length; i ++){

    console.log(arrayFromJson[i]);

}


