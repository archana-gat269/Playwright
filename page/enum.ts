// // //Enum in TypeScript is a way to define a set of named constants. It can be used to represent a collection of related values, such as HTTP methods, days of the week, or status codes. Enums can be numeric or string-based, and they provide a way to give more meaningful names to these values.

enum HTTPMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE"
}

function sendRequest(method: HTTPMethod) {
    console.log("Sending " + method + " request");
}

sendRequest(HTTPMethod.GET);
sendRequest(HTTPMethod.POST);
sendRequest(HTTPMethod.PUT);
sendRequest(HTTPMethod.DELETE);

// //Numeric Enums
// enum StatusCodes {
//     OK = 200,
//     NotFound = 404,
//     InternalServerError = 500
// }
// let statusCode = StatusCodes.OK;
// console.log("Status Code: " + statusCode);

// //String Enums
// enum Environment {
//     Development = "development",
//     Staging = "staging",
//     Production = "production"
// }
// let env = Environment.Development;
// console.log("Current Environment: " + env);


// enum Browser {
//     Chrome = "Chrome",
//     Firefox = "Firefox",
//     Safari = "Safari",
//     Edge = "Edge"
// }
// let browser = Browser.Chrome;
// console.log("Current Browser: " + browser);