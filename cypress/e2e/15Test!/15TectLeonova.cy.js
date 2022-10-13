/*

///<reference types= "Cypress"/>

npx cypress run

npx cypress run --spec "cypress\e2e\Test.cy.js"

npm install @faker-js/faker --save-dev

import { faker } from '@faker-js/faker';

const randomEmail = faker.internet.email();
    const randomName = 'AutomationTest' + faker.name.fullName();
    const randomLastName = faker.name.lastName();
    const id = faker.datatype.uuid();
    const img = faker.image.avatar();
    // data
    // bithday
    // password
    const arr = faker.helpers.arrayElement(['free','toy','length'])


    cy.get('[onclick="myFunction()"]').click();
        cy.on('window:confirm',(str)=>{
            expect(str).to.equal('Press aqweqwe')
        })

        */