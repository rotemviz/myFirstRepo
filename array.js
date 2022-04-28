// let arr= [15,18,32];

// console.log(arr.length);

for(let i=0; i<=2; i++)
{
    // if(i==="1")
        continue;
    if(i == 2)
        break;
    console.log(arr[i]);
}

// let i=0;
// while(i<arr.length) {
//     console.log(arr[i]);
//     i++;
// }

// let fruit=["apple", "banana", "orange"];
// for(let i=0; i<fruit.length; i++)
// {
//     if(fruit[i]=="banana"){
//         console.log("We have bananas");
//         break;
//     }
// }

let person = {
    name: 'John',
    age: 40, 
    country: 'Israel',
    sayHello: () => console.log("Hello"),
};
// console.log(person.country);

// console.log(person["name"]);

// for(const key in person) {
//     if(key === "country")
//         break;
//     console.log(person[key]);
// }

// for(const iterator of fruit) {
//     console.log(iterator);
// }

console.log(typeof[]);

const arr=[23,25,11];
arr.push(15)
console.log(arr);
arr.pop();
console.log(arr);
console.log(arr.indexOf(25));
console.log(arr.includes(23));

const foo = (el) => {
    console.log(el);
};

arr.forEach(foo)

arr.forEach((el) => {
    console.log(el);
})
