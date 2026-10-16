//SpreadOperator: 
const pcolor = ["red", "green", "blue"];
const scolor = ["yellow", "orange", "pink"];
const mColors = [...pcolor, ...scolor];
console.log("All colors:", mColors); // Output: All colors: [ 'red', 'green', 'blue', 'yellow', 'orange', 'pink' ]

//typeoperator
type pcities = "Delhi" | "Mumbai" | "Bangalore";
type scities = "Chennai" | "Kolkata" | "Hyderabad";
type mcities = pcities | scities;
const cities: mcities[] = ["Delhi", "Mumbai", "Chennai", "Kolkata", "Bangalore", "Hyderabad"];
console.log("Cities:", cities); // Output: Cities: [ 'Delhi', 'Mumbai', 'Chennai', 'Kolkata', 'Bangalore', 'Hyderabad' ]      

type pCities = [X:String, Y:String, Z:String];
type sCities = ['Chennai','Kolkata','Hyderabad'];
type mCities = [...pCities, ...sCities];
const cities1: mCities = ['Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad'];
console.log("Cities1:", cities1); // Output: Cities1: [ 'Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad' ]

//INTERFACE USING SPREAD OPERATOR
interface Person {
    name: "Archana";
    age: 25;
    marketingemail: true    ;
}
function updatePerson(original: Person  , updates: Partial<Person>): Person {
    return { ...original, ...updates };
};
