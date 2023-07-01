/// <reference types="cypress" />
describe('Input Forms Tests ',()=>{
    
    beforeEach('Navigate to registration page',()=>{
        //run before each testcases, before method in TestNG
        cy.clearCookies();
        cy.visit('/registration_form');
    })
    
    it('Check different input box fields and verify', ()=>{
        // fill the form  for user name and other infos 
        cy.get('input[name="firstname"]').type('Mike');
        cy.get('input[name="lastname"]').type('Bibby');
        cy.get('input[name="username"]').type('Singer');
        
        // Math.random(): create a number between 0-1 
        // math.floor(): makes it a whole number    

        let email = `formtest${Math.floor(100000+Math.random()*900000)}@cydeo.com`    
        cy.get('input[name="email"]').type(email);
    })
})