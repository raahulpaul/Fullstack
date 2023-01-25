// custom datatypes are known as objects

let person = {firstName: "Rahul", lastName: "Paul", age: 22};
person.isLearning = true;
// console.log(person.firstName)
console.log(person)


// type conversion - when we try to convert the data type
// type coercion - when data type is changed automatically
// + operator mosly converts into string and - operator in number

// Ternary Operator

num1 = 5;
num2 = 2;

// we can write if else also like this
num1 > num2 ? "num1 is greater than num2" : "num1 is smaller than num2";

// we can write if else if else also like this
num1 > num2 ? "num1 is greater than num2" : num1 < num2 ? "num1 is smaller than num2" : "both are equal";

// for of loop -> it gives direct access to the value

let number = [1,2,3,4,5,6];

let evenNumber = [];
let oddNumber = [];

for(let num of number) {
    if(num % 2 == 0) {
        evenNumber.push(num);
    }

    else {
        oddNumber.push(num);
    }
}

console.log(evenNumber);
console.log(oddNumber);

// for in loop -> it gives direct access to the index

for(let index in number) {
    console.log(number[index]);
}

// combine array
evenNumber.concat(oddNumber);

// split array
number.slice(0,4);