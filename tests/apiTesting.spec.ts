import{test,Page, expect} from '@playwright/test'
// test("Get API Testing",async({request}) =>{
//     const uri = "https://reqres.in/api/users?page=3"
//     const response = await request.get(uri)
//     const data = await response.json()
//     console.log(data);

//     const status = response.status()
//     console.log(status);
//     expect(status).toBe(200)
// })

// test("Post API Testing",async({request}) =>{
//     const uri = "https://reqres.in/api/users"
//     const response = await request.post(uri, {
//     headers: {
//         "Content-Type"   
//         : "application/json"
//     },
//     data: {
//         name: "John",
//         job: "QA Engineer"
//     }
// })
//     const json = await response.json();
//    expect(response.status()).toBe(201);
//     console.log(json);
// })



// test("PUT API Testing", async ({ request }) => {

//     const uri = "https://reqres.in/api/users/2";

//     const response = await request.put(uri, {
//         headers: {
//             "Content-Type": "application/json"
//         },
//         data: {
//             name: "John",
//             job: "Senior QA Engineer"
//         }
//     });

//     const json = await response.json();

//     expect(response.status()).toBe(200);

//     console.log(json);
// });


test("PATCH API Testing", async ({ request }) => {

    const uri = "https://reqres.in/api/users/2";

    const response = await request.patch(uri, {
        headers: {
            "Content-Type": "application/json"
        },
        data: {
            job: "Automation QA Engineer"
        }
    });

    const json = await response.json();

    expect(response.status()).toBe(200);

    console.log(json);
});
