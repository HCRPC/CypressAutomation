/// <reference types="cypress" />
describe('Input Forms Tests ',()=>{
    
    beforeEach('Navigate to registration page',()=>{
        //run before each testcases, before method in TestNG
        cy.clearCookies();
        cy.visit('/registration_form');
    })
    
    it.skip('Check different input box fields and verify', ()=>{
        // fill the form  for user name and other infos 
        cy.get('input[name="firstname"]').type('Mike');
        cy.get('input[name="lastname"]').type('Bibby');
        cy.get('input[name="username"]').type('Singer');
        
        // Math.random(): create a number between 0-1 
        // math.floor(): makes it a whole number    

        let email = `formtest${Math.floor(100000+Math.random()*900000)}@cydeo.com`    
        cy.get('input[name="email"]').type(email);

        let password =`test${Math.floor(100000+Math.random()*900000)}`;
        cy.get('input[name="password"]').type(password);

        let phoneNumber = `555-000-${Math.floor(1000+Math.random()*9000)}`; //4 digit extension number
        cy.get('input[name="phone"]').type(phoneNumber);

        cy.get('input[name="birthday"]').type('01/01/2021');


}); 
    it.skip('Check different radio button actions',()=>{

        cy.get('.radio')
        .find('[type=radio]')
        .then((radio =>{
            // get all radio button, select first one verify it is checked
            cy.wrap(radio).first().check().should('be.checked');  // radio buttonu cehck() ile çek ediyor
                       /** radio is a jquerry element , cy.wrap(radio): turns it to cypress object
             * then we use first element */          

            // get all, select second one is checked and confirmation label is visible

          cy.wrap(radio).eq(1).check().should('be.checked');
          cy.get('[data-bv-icon-for="gender"]').should('be.visible');// common method is visible
          
          // third radio button is not checked
          cy.wrap(radio).eq(2).should('not.be.checked');
        }))
})
    it.skip('Check different checkbox actions',()=>{
        cy.get('[type = "checkbox"]').then((checkbox =>{
            cy.wrap(checkbox).eq(1).check().should('be.checked');
            //uncehckewd java
            cy.wrap(checkbox).eq(1).uncheck().should('not.be.checked');
            // verify third one has a value Javascript and check and verify
            cy.wrap(checkbox).eq(2).should('have.value','javascript').check().should('be.checked'); // bu efsane neyi check edeceğini kontrol ediyorrr
        }))       
})
    it.skip('Check selection of a single choice from a selected dropdown', () =>{
        //select one element with the name
        cy.get('select[name="job_title"]').select("SDET");
        // assert that dropdown has correct text after selecting
        cy.get('select[name="job_title"]').contains('SDET');
    })

    it('Check selection of all select dropdown options', () =>{
          //we will provide our test data through fixture folder, then use that data to verify select values
          cy.fixture('departments').then((departments)=>{
           // get all options in the menu , iterate through these options one by one
           cy.get('select[name="department"] > option').each((option, index) => {
                // 10 eleman da burda şimdi
            // get each option text
            const optionText = option.text();// tüm textleri aldı 10 tane
          //  cy.log(optionText); // real data ları dropdowndan alıyor
          //  cy.log(index); 
          //  cy.log(departments[index]);//fixture dan alıyor    

              cy.get('select[name="department"]').select(optionText)  
             .should('have.value',option.val())
           //  .should('have.text',option[index])
              .contains(departments[index]);

           }) 
          })  
    })
});