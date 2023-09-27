/// <reference types="cypress" />
describe('Cypress file upload tests',()=>{
    /**
     * 1-------in order to upload we need plugin , we use command npm install -dev cypress-file-upload
     * package -lock. json dsoyasından kontrol et yüklenmişmi
     * 
     * need to import necessary command to our project
     * in our support folder we have commands.js file --> we put utility methods here 
     * 
     * 2--------import 'cypress-file-upload'; to support commands
     * 
     * 3-------put the file that you want to upload should be in fixure folder
     */
    
    beforeEach('Navigate to upload page', ()=>{
        //run before each testcases, before method in TestNG
        cy.clearCookies();
        cy.visit('/upload');
    }) ;
   
    it('Opening a web app', ()=>{
        //locator for choose file button
        cy.get('input[id="file-upload"]').attachFile('ghost.png'); 
        //click to upload button
        cy.get('#file-submit').click();
        //assert
        cy.get('#uploaded-files').then(()=>{
            cy.contains('ghost.png').should('be.visible');
        })
      
    })
});