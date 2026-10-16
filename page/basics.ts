// const name: string = "Archana";

// console.log(`Hello ${name}`);
// console.log("TypeScript is working!");
// let age: any = 25;
// console.log(`Age: ${age}`);
// function add(a: number, b: number): number {
//   return a + b;
// }

// const result = add(10, 20);

// console.log(result);
// const numbers: number[] = [1, 2, 3, 4, 5];

// const doubled = numbers.map(x => x * 2);

// console.log(doubled);
// const numbers: number[] = [1, 2, 3, 4, 5];

// const result = numbers.filter(x => x > 2);

// console.log(result);
// const numbers: number[] = [1, 2, 3, 4, 5];

// const total = numbers.reduce(
//     (sum, current) => sum + current,
//     0
// );

// console.log(total);
// const numbers: number[] = [1, 2, 3, 4, 5];

// const result = numbers
//     .map(x => x * 2)
//     .filter(x => x > 5)
//     .reduce((sum, x) => sum + x, 0);

// console.log(result);
// const users = ["Archana", "Rahul", "Amit"];

// const result = users
//     .map(user => user.toUpperCase())
//     .filter(user => user.startsWith("A"))
//     .reduce((result, user) => result + user + " ", "");

// console.log(result);
// function greet(name: string): string;
// function greet(name: string, age: number): string;

// function greet(name: string, age?: number): string {
//     if (age !== undefined) {
//         return `Hello ${name}, you are ${age} years old`;
//     }

//     return `Hello ${name}`;
// }

//map() is used to transform each element,
//  filter() is used to select multiple elements based on a condition, 
// find() returns the first matching element, and 
// reduce() is used to accumulate or combine all elements into a single result.

// map() = modify/transform every element
const tests = [
    { name: "Login", status: "Pass", time: 2 },
    { name: "Search", status: "Fail", time: 5 },
    { name: "Logout", status: "Pass", time: 1 },
    { name: "Payment", status: "Fail", time: 8 }
];
const testNames = tests.map(test => test.name);

console.log(testNames); //[ 'Login', 'Search', 'Logout', 'Payment' ]
const newTimes = tests.map(test => test.time + 1);

console.log(newTimes);//[ 3, 6, 2, 9 ]

//filter() = select multiple items based on a condition
const failedTests = tests.filter(test => test.status === "Fail");

console.log(failedTests); //[{ name: "Search", status: "Fail", time: 5 }, { name: "Payment", status: "Fail", time: 8 }]
const slowTests = tests.filter(test => test.time > 3);
console.log(slowTests); //[{ name: "Search", status: "Fail", time: 5 }, { name: "Payment", status: "Fail", time: 8 }]

//find() = find the first matching item
const firstFailedTest = tests.find(test => test.status === "Fail");
console.log(firstFailedTest); //{ name: "Search", status: "Fail", time: 5 }
const result = tests.find(test => test.name === "Registration");

console.log(result); //undefined

//reduce() = accumulate or combine all elements into a single result
const totalTime = tests.reduce((sum, test) => sum + test.time, 0);
console.log(totalTime); //16

//forEach() = When you want to perform an action on every element.
tests.forEach(test => {
    console.log(`${test.name}: ${test.status}`);// Login: Pass, Search: Fail, Logout: Pass, Payment: Fail
});

// some() = When you want to check whether at least one item satisfies a condition.
const hasFailedTests = tests.some(test => test.status === "Fail");
console.log(hasFailedTests); // true

// every() = When you want to check whether all items satisfy a condition.
const allTestsPassed = tests.every(test => test.status === "Pass");
console.log(allTestsPassed); // false

// // sort() = When you want to sort the items based on a property.
// const sortedTests = tests.sort((a, b) => a.time - b.time);
// console.log(sortedTests); //[{ name: "Logout", status: "Pass", time: 1 }, { name: "Login", status: "Pass", time: 2 }, { name: "Search", status: "Fail", time: 5 }, { name: "Payment", status: "Fail", time: 8 }]

// // findIndex() = When you want to find the index of the first item that satisfies a condition.
// const index = tests.findIndex(test => test.status === "Fail");
// console.log(index); //1

// // includes() = When you want to check whether an array contains a specific value.
// const testNamesArray = tests.map(test => test.name);
// const hasLoginTest = testNamesArray.includes("Login");
// console.log(hasLoginTest); // true

// // flat() = When you want to flatten a nested array into a single array.
// const nestedArray = [[1, 2], [3, 4], [5, 6]];
// const flatArray = nestedArray.flat();
// console.log(flatArray); // [1, 2, 3, 4, 5, 6]

// // flatMap() = When you want to map each element to an array and then flatten the result into a single array.
// const flatMappedArray = tests.flatMap(test => [test.name, test.status]);
// console.log(flatMappedArray); // ['Login', 'Pass', 'Search', 'Fail', 'Logout', 'Pass', 'Payment', 'Fail']

// // reverse() = When you want to reverse the order of the elements in an array.
// const reversedTests = [...tests].reverse();
// console.log(reversedTests); //[{ name: "Payment", status: "Fail", time: 8 }, { name: "Logout", status: "Pass", time: 1 }, { name: "Search", status: "Fail", time: 5 }, { name: "Login", status: "Pass", time: 2 }]  

// // concat() = When you want to combine two or more arrays into a single array.
// const moreTests = [
//     { name: "Registration", status: "Pass", time: 3 },
//     { name: "Profile Update", status: "Pass", time: 4 }
// ];
// const combinedTests = tests.concat(moreTests);
// console.log(combinedTests); //[{ name: "Login", status: "Pass", time: 2 }, { name: "Search", status: "Fail", time: 5 }, { name: "Logout", status: "Pass", time: 1 }, { name: "Payment", status: "Fail", time: 8 }, { name: "Registration", status: "Pass", time: 3 }, { name: "Profile Update", status: "Pass", time: 4 }]

// // join() = When you want to create a string by joining all elements of an array with a specified separator.
// const testNamesString = testNamesArray.join(", ");
// console.log(testNamesString); // "Login, Search, Logout, Payment"   

// // slice() = When you want to create a new array that is a portion of an existing array.
// const slicedTests = tests.slice(1, 3);
// console.log(slicedTests); //[{ name: "Search", status: "Fail", time: 5 }, { name: "Logout", status: "Pass", time: 1 }]

// // splice() = When you want to add or remove elements from an array at a specific index.
// const splicedTests = [...tests];
// splicedTests.splice(1, 2, { name: "New Test", status: "Pass", time: 2 });
// console.log(splicedTests); //[{ name: "Login", status: "Pass", time: 2 }, { name: "New Test", status: "Pass", time: 2 }, { name: "Payment", status: "Fail", time: 8 }]  

