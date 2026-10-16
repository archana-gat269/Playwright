// abstract class Animal {

//     abstract sound(): void;  // abstract method

//     eat(): void {             // normal method
//         console.log("Animal is eating");
//     }
// }

// class Dog extends Animal {

//     sound(): void {
//         console.log("Dog barks");
//     }
// }

// const dog = new Dog();
// dog.sound();
// dog.eat();
// console.log(dog instanceof Dog); // Output: true
// console.log(dog instanceof Animal); // Output: true

abstract class BaseAPI {

    baseUrl: string = "https://test-api.com";

    // Common method
    setHeaders(): void {
        console.log("Authorization header added");
    }

    // Common method
    validateStatusCode(): void {
        console.log("Status code validated");
    }

    // Every API must define its own request
    abstract executeRequest(): void;

   // constructor BaseAPI = new BaseAPI() {
       
    }



// Example of a concrete class extending the abstract class (child class)

class LoginAPI extends BaseAPI {

    executeRequest(): void {
        console.log("POST /login");
    }
}

// Example of another concrete class extending the abstract class (child class)

class CustomerAPI extends BaseAPI {

    executeRequest(): void {
        console.log("GET /customers");
    }
}

// Usage

const login = new LoginAPI();

login.setHeaders();
login.executeRequest();
login.validateStatusCode();

// Usage

const customer = new CustomerAPI();

customer.setHeaders();
customer.executeRequest();
customer.validateStatusCode();