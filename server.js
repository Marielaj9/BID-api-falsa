const express = require("express");
const app = express();
const port = 8000;

const { faker } = require('@faker-js/faker');

app.use( express.json() );
app.use(express.urlencoded({extended: true}));

let users= [
    {id: 1 , firstName: faker.name.firstName(), lastName: faker.name.lastName(), phone: 123456, email: faker.internet.email(), password: faker.internet.password()}
]

let companies= [
    {id: 1, firstName: faker.name.firstName(), direction: {street: faker.address.street(), city: faker.address.city(), state: faker.address.state(), postal: 1345, country: faker.address.country()}}
]

let UserCompany =[
    {id: 1 , firstName: faker.name.firstName(), lastName: faker.name.lastName(), phone: 123456, email: faker.internet.email(), password: faker.internet.password()},
    {id: 1, firstName: faker.name.firstName(), direction: {street: faker.address.street(), city: faker.address.city(), state: faker.address.state(), postal: 1345, country: faker.address.country()}},
]

app.get("/api/users/new", (req, res) => {
    res.json(users);
})

app.get("/api/companies/new", (req, res) => {
    res.json(companies);
})

app.get("/api/user/company", (req, res) => {
    res.json(UserCompany);
})

app.get("/api", (req, res) => {
    res.json({ _id: "Hello World" });
});



app.listen( port, () => console.log(`Listening on port: ${port}`) );

