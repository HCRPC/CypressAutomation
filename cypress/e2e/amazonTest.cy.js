/// <reference types="cypress" />


describe('Amazon Login', () => {
    beforeEach(() => {
      cy.visit('https://www.amazon.com.tr');
      cy.get("input[id='sp-cc-accept']").click({force:true});
    })
  
   it('TC1', () => {
     //cy.contains("Hesap ve Listeler").trigger('mouseover');
     //cy.contains("Giriş yap").click();
     //cy.scrollTo(0,1000,{duration:10000})
        cy.xpath("//a[text()='Tüm indirimler']").scrollIntoView({duration:5000});
    })
})