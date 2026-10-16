//Union and intersection types are advanced types in TypeScript that allow you to combine multiple types into one. They are useful for creating more flexible and reusable code.

//Union Types
//A union type allows a variable to hold values of multiple types. You can define a union type using the pipe (|) symbol.
type Status = "Pass" | "Fail";

type ID = string | number;
let id: ID;

id = "EMP101"; 
id = 101;  

//Intersection Types
//An intersection type combines multiple types into one. You can define an intersection type using the ampersand (&) symbol.
interface Person {
    name: string;
    age: number;
}   

interface Employee {
    id: number;
    salary: number;
}

type Staff = Person & Employee;
