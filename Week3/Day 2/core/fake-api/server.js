const express = require('express');
const { faker } = require('@faker-js/faker');
const port = 5000
const app = express()
app.listen( port, () => console.log(`Listening on port: ${port}`) );

const createUser = () => ({
        password: faker.internet.password(),
        email:faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.person.lastName(),
        firstName: faker.person.firstName(),
        id: faker.string.uuid()
    });

    
const newFakeUser = createUser();
const createCompany = () => ({
        id: faker.string.uuid(),
        name: faker.company.name(),
        adress: {
            street: faker.location.street(),
            city : faker.location.city(),
            state : faker.location.state(),
            zipCode :faker.location.zipCode(),
            country : faker.location.country(),
        }
    });
  
const newFakeCompany = createCompany();
app.get("/api/users/new",(req,res)=>{
    res.json(newFakeUser)
})
app.get("/api/companies/new",(req,res)=>{
    res.json(newFakeCompany)
})
app.get("/api/user/company",(req,res)=>{
    const response ={
        newFakeUser : newFakeUser,
        newFakeCompany : newFakeCompany,
    }
    res.json(response)
})