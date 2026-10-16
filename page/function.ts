// function user<T>(item: T): T {
//     return item;
// }
// let result3 = user("Archana");
// let result4 = user(100);
// let result5 = user(true);
// console.log(result3);
// console.log(result4);
// console.log(result5);

// interface User {
//     name: string;
//     age: number;
// }
// const user1: User = {
//     name: "Archana",
//     age: 22
// };
// console.log(user1);

interface UserRes<T> {
    status: string;
    data: T;
}
 interface admin {
    name: string,
    role: string   
 } 
 const adminuser:UserRes <admin> = {
    status: "Sucess",
    data: {
        name: "Archana",
        role: "SuperAdmin"
    }
 }
 console.log(adminuser.data.name);