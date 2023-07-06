/// <reference types="cypress" />
describe('Alerts in Cypress test environment',{baseUrl: 'https://demoqa.com'},()=>{
    before(()=>{
        // runs once before all test cases in describe block, like before class
    })
    beforeEach(()=>{
        //run before each testcases, before method in TestNG
        cy.clearCookies();
        cy.visit('/alerts');
    
    })
    it.skip('check alert configuration', ()=>{

        /**
         * Browser  commands, window : alert, window : confirm , window : on , etc...
         */

        const stub = cy.stub(); // create stub function

        cy.on('window:confirm',stub); // give control to stub function

        cy.get('#confirmButton').click().then(()=>{
            expect(stub.getCall(0)).to.be.calledWith('Do you confirm action?');
        });

        cy.on('window:confirm',()=> true); // confirm alert

        cy.contains('You selected Ok').should('be.visible');
        
      
    })
    it('check alert cancelation', ()=>{

        /**
         * Browser  commands, window : alert, window : confirm , window : on , etc...
         */

        const stub = cy.stub(); // create stub function

        cy.on('window:confirm',stub); // give control to stub function

        cy.get('#confirmButton').click().then(()=>{
            expect(stub.getCall(0)).to.be.calledWith('Do you confirm action?');
        });

        cy.on('window:confirm',()=> false); // cancel alert

        cy.contains('You selected Cancel').should('be.visible');
        
      
    })
   
})