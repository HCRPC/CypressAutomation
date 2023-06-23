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

        cy.get("input").each((item, index, list)=>{
            // assert the lengt is equal to 2
            expect(list).to.have.length(2);
            expect(item).to.have.attr("type");
        })

    })

})