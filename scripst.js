let number=10;
let name="John";

console.log(number, name);

console.log(number % 4);

const num = 5;

if(num<2) {
    console.log("num is smaller then 2");
}
else if (num < 4 ) {
    console.log("num is smaller then 4");
}
else {
    console.log("non of the if");
}

let book= "Harry Potter";
switch (book) {
    case "Rich dad poor dad":
        console.log("the book is Rich dad poor dad");
        break;

    case "Harry Potter II":
        console.log("the book Harry Poter II");
        break;

    default:
        console.log("not the book Harry Poter II || Rich dad poor dad");
        break;
}

const MAX_HEIGHT=2.0 , MIN_HEIGHT=1.7;
let height = 1.72;
if(height >=MAX_HEIGHT)
 console.log("You are too high to ride the rollercoaster")
else if(height >= MIN_HEIGHT)
    console.log("You can ride the rollercoaster");
else
    console.log("You are too short to ride the rollercoaster");

console.log(1=="1")
console.log(1==="1")

function sayHello() {
    console.log("hello world");
}

sayHello();

function sayHi(firstName, lastName) {
    console.log("Hi "+firstName+" "+lastName)
}

sayHi("John", "Wick");

function sum(numOne, numTwo) {
    console.log(numOne+numTwo);
}

sum(15, 19);

function doSomeThing() {
    return 10;
}

let result=doSomeThing();
console.log(result);
console.log(doSomeThing());

function greaterThen(num1, num2) {
    return num1 > num2;
}

console.log(greaterThen(3, 5));

function myBMI(weight, height) {
    return weight/Math.pow(height, 2);
}

console.log(myBMI(45,1.80));

function bodyMassIndex() {
    const bmi = myBMI(45, 1.70);
    if(bmi < 18.5)
        console.log("UnderWeight");
    else if(bmi <24.9) 
        console.log("Normal");
    else if(bmi <34.9) 
        console.log("Obese");
    else 
        console.log("Extremely Obese");
}

