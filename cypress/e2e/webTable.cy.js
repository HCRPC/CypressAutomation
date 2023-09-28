/// <reference types="cypress" />
describe('Cypress webtable tests', {baseUrl: 'https://demoqa.com'},()=>{
    /**
     * farklı bir URLe gitmek istioz bunu için describe blocka yazcaz
     */
    
    beforeEach('Navigate to upload page', ()=>{
        //run before each testcases, before method in TestNG
        cy.clearCookies();
        cy.visit('/webtables');
    }) ;
   
    it.skip('check finding and eiting record', ()=>{
        // locate table body and navigate through thi selement to find Alden and update with another person
        /**
         * 1-table in tamamını alıyor , 
         * 2-ikinci adımda rowları alıyor bunrdan Alden i buluyor
         * 3-store it imto a jquerry element
         */
        cy.get('.rt-tbody')
        .contains('.rt-tr-group','Alden')
        .then((row)=>{
            //click on edit button
            cy.wrap(row).find('[title="Edit"]').click();
            //yeni kişi bilgilerini gir
            cy.get('#firstName').clear().type('Harvey');
            cy.get('#lastName').clear().type('Specter');
            cy.get('#submit').click();
            // hala row elemnt içindeyiz : will do assertions // Aldenin içinde olduğu row dayız
            cy.wrap(row).find('.rt-td').eq(0).should('contain','Harvey');
            cy.wrap(row).find('.rt-td').eq(1).should('contain','Specter');
        })
      
    })
    it.skip('Check finding and deleting a record',()=>{
        cy.get('.rt-tbody')
        .contains('.rt-tr-group','Alden')
        .then((row)=>{
            //click on edit button
            cy.wrap(row).find('[title="Delete"]').click();

    })
            // assert that table doesnt have Alden record
            cy.get('.rt-tbody').should('not.contain','Alden');
            cy.get('#searchBox').type('Alden');
            // assert that no recor Alden
            cy.get('.rt-tbody').should('not.contain','Alden')
            //no data is visible is found or not
            cy.get('.rt-noData').should('contain','No rows found').should('be.visible');
    })
    it.skip('Check search for different age records',()=>{
        // age groups tobe search
        const ageGroup = [29,39,45,77];
        //for each age group same test scenario , wrap java script arrayini java scriptte kullalır jhale getiriyor-> çevir gibi
        cy.wrap(ageGroup).each((age)=>{  // for each loop görevi görür
            //type age to search box
            cy.get('#searchBox').clear().type(age);
            // verify is that age exists,  sesond number of records
            if(age===77){
                //negative
                cy.get('.rt-tbody').find('.rt-tr-group').first().should('not.contain',age);
                cy.get('.rt-noData').should('contain', 'No rows found');
            }
            else{
                   // positive 
            cy.get('.rt-tbody').find('.rt-tr-group').first().should('contain',age);
            cy.get('.rt-tbody').contains('.rt-tr-group',age).should('have.length',1);
            }
        })
   
    })
    it.skip('Check adding -Bad code practice',()=>{
        // click on add button
        cy.get('#addNewRecordButton').click();
        cy.get('#firstName').type('Harvey');
        cy.get('#lastName').type('Specter');
        cy.get('#userEmail').type('specter@example.com');
        cy.get('#age').type('40');
        cy.get('#salary').type('70000');
        cy.get('#department').type('legal');
        cy.get('#submit').click();
        // assert new record is added
        cy.get('.rt-tbody')
        .contains('.rt-tr-group','Harvey')
        .then((raw)=>{
          cy.wrap(raw).find('.rt-td').eq(0).should('contain','Harvey');  
          cy.wrap(raw).find('.rt-td').eq(1).should('contain','Specter');  
          cy.wrap(raw).find('.rt-td').eq(2).should('contain','40');  
          cy.wrap(raw).find('.rt-td').eq(3).should('contain','specter@example.com');  
          cy.wrap(raw).find('.rt-td').eq(4).should('contain','70000');  
          cy.wrap(raw).find('.rt-td').eq(5).should('contain','legal');  
          
    })
})
    it('add new record - better approach', ()=>{
        cy.get('#addNewRecordButton').click();
        cy.fixture('user').then((user)=>{
            const columnNames = Object.keys(user.user1) //get user1 keys and stores into column names array
            const userData = Object.values(user.user1);
            cy.wrap(columnNames).each((columnName, index)=>{
            //   cy.log(columnName);
            // cy.log(userData[index]);
            
            cy.get(`#${columnName}`).type(`${userData[index]}`); // back tick le concat yaptık locaterlar zaten column name ile aynı
            })
            cy.get('#submit').click();

            // abetter approach  tekrar bak karısık gibi row ve index muhabbetleri
            cy.get('.rt-tbody')
            .contains('.rt-tr-group',userData[0])
            .then((row)=>{
                cy.wrap(userData).each((value,index)=>{
                    cy.wrap(row).find('.rt-td').eq(index).should('contain',value);
                })
            })
        })

    })
});