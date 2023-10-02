describe('how to make API testing using cypress',()=>{

    it('simple test',()=>{

        cy.request({
            method :'GET',
            //hardcodede url : https//demoqa.com/Bookstrore/v1/Books
            url : `${Cypress.env('apiURL')}${Cypress.env('apiBooks')}}`,
            //https://demoqa.com/swagger/#/
            // other than method and url the rest of options depend on your tests case
            
            failOnStatusCode : false
        }).then((response)=>{
            expect(response.status).to.equal(200);
            cy.log(response);
       //    cy.log(response.body.books[0].isbn); //kitap isimle siteden gelmiyor ama yaklaşım bu
          expect(response.body.books[1].title).to.equal('Learning JavaScript Design Patterns')
          expect(response.headers.connection).to.equal('keep-alive');

          const {books} = response.body;
          books.forEach(element=>{
            console.log(element.title);
          })
          let index = 0;
          cy.fixture('bookTitles').then((expectedBookTitle)=>{
            expect(response.body.books[index].title.to.equal(expectedBookTitle[index])); //json la verify etti benim json boş
            index ++;
          })
          
        })
    })
})