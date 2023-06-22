/// <reference types="cypress" />
describe('Context : My first tests',()=>{
    before(()=>{
        // runs once before all test cases in describe block, like before class
    })
    beforeEach(()=>{
        //run before each testcases, before method in TestNG
        cy.clearCookies();
    })
    after(()=>{
        //similar to afterClass in TestNG runs once after all tests finished
    })
    afterEach(()=>{
        // similar to afterMethod in testNG
    })
    it('Opening a web app', ()=>{
        cy.visit('/registration_form');
      //  cy.get(':nth-child(9) > a').click();
        //cy.get(':nth-child(4) > :nth-child(1) > a').click();
    })
})