//keyof = Give me the keys
interface User {
    id: number;
    name: string;
    email: string;
    age: number;
}
type UserKey = keyof User;
const userKeys: UserKey[] = ["id", "name", "email", "age"];
console.log("User keys:", userKeys);

//typeof = give me the type of the variable
const user = {
    id: 101,
    name: "Archana",
    email: "archana@test.com",
    age: 25
};
const user2: UserType = {
    id: 102,
    name: "Rahul",
    email: "rahul@test.com",
    age: 30
};
type UserType = typeof user;
console.log("User type:", user2);


//Partial
type PartialUser = Partial<User>;
const partialUser: PartialUser = {
    name: "John Doe"
};
console.log("Partial user:", partialUser);

//Pick 
type PickUser = Pick<User, "id" | "name">;
const pickedUser: PickUser = {
    id: 1,
    name: "John Doe"
};
console.log("Picked user:", pickedUser);

//Omit
type OmitUser = Omit<User, "email" | "age">;
const omittedUser: OmitUser = {
    id: 1,
    name: "John Doe"
};
console.log("Omitted user:", omittedUser);

//Record
type UserRecord = Record<number, User>;
const userRecord: UserRecord = {
    1: { id: 1, name: "John Doe", email: "john.doe@example.com", age: 30 },
    2: { id: 2, name: "Jane Smith", email: "jane.smith@example.com", age: 25 }
};
console.log("User record:", userRecord);

//Exclude
type UserKeys = "id" | "name" | "email" | "age";
type ExcludedKeys = Exclude<UserKeys, "email" | "age">;
const excludedKeys: ExcludedKeys[] = ["id", "name"];
console.log("Excluded keys:", excludedKeys);

