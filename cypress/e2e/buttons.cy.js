/// <reference types="cypress" />
describe('Context : My first tests',()=>{
    
    beforeEach(()=>{
        //run before each testcases, before method in TestNG
        cy.clearCookies();
        cy.visit('/multiple_buttons');
    })
    
    it.only('Check different button actions', ()=>{
        // select a button with text
        cy.contains('Button 2').should('be.visible').click();
        cy.contains('Clicked on button two!').should('be.visible');

        //find element with class att and create list and selct 3rd element 
        cy.get('.btn.btn-primary').then(buttons =>{
            cy.wrap(buttons).eq(2).click(); //wrap list haline getiriyor index 2 ye tıklıyor

            cy.contains('Clicked on button three!').should('be.visible');

        })
        // you got all buttons with tag name
        cy.get('button').each((item, index, list)=>{
           //assert  list of the list , verify number of buttons
           expect(list).to.have.length(6);
           expect(item).to.have.attr("onclick");     

        })

        // I will get all buttons , click the button which has text is  button 4

        cy.get('button').each((item)=>{ //jquerry elemanın acypresstaki gibi click yapampıoz , yani each i.iene aldığımızı wrap yapmamız lazım 
            if (item.text()=='Button 4'){
                cy.log(item.text()); //testi log yapar yazdırır.
                cy.wrap(item).click();
                cy.contains('Clicked on button four!').should('be.visible');    
            } 
 
         })
    })
}) 