// function expression syntax

const add = function addNumber(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

console.log(add(9, 9));

// anonymous function -> function which doesn't have name

const subtract = function (firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

console.log(subtract(9, 8));

const person = {
    firstName: "Rahul",
    lastName: "Paul",
    print: function() {
        console.log("this function is the property of an object")
    }
};

person.print;