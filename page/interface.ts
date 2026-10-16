//add the record or remove the data from interface

interface User {
    name: string;
    age: number;
    email: string;
}
const users: User[] = [
    {
        name: "Archana",
        age: 30,
        email: "archana@test.com"
    },
    {
        name: "Rahul",
        age: 28,
        email: "rahul@test.com"
    }
];
users.push({
    name: "Amit",
    age: 32,
    email: "amit@test.com"
});
users.splice(1, 1);
console.log(users);
//inheritance in interface
interface Person {
    name: string;
    age: number;
}

interface Employee extends Person {
    employeeId: string;
    salary: number;
}

const employee: Employee = {
    name: "John Doe",
    age: 35,
    employeeId: "EMP123",
    salary: 50000
};
console.log(employee);