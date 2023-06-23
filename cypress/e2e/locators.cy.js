/// <reference types="cypress" />
describe('Find or Get by Using Different Locators',()=>{
    
    beforeEach(()=>{
        //run before each testcases, before method in TestNG
        cy.clearCookies();
        cy.visit('/login');
    })
    
    it('Check different locator strategies', ()=>{
        // By CSS locator
        cy.get("input[name='username']").type("CydeoStudent");// every statements create an object to be interacted
        //, and next command makes operation to the object created the previous statement
        // attribute name and value     
        cy.get("[type = 'text']").clear();// clear what is typed

        //tag name
        cy.get("input").each((item, index, list)=>{
            // assert the lengt is equal to 2
            expect(list).to.have.length(2); // explicir assertion
            expect(item).to.have.attr("type");
        })

        //attribute
        cy.get('[type]')

        ///by class name 
        cy.get('.btn.btn-primary')

        // by id
       //  cy.get('wooden_spoon')//hash işaretini koyamıyoyum !!!!! wooden in basında olmalı

        //to use text in cypress, we have no xpath
          cy.get('button').should('contain','Login').click();   
        
          
    })
    it.only(('Check finding elements bu traveling through DOM'),()=>{

        // travel to find login button go parent 
        cy.get('input[name="username"]').parents('form').find('button').should('contain','Login').click();


    })

})