
const username = `user${(Math.floor(Math.random()*100000).toString().substring(1))}`;
const password = 'Test123465';

describe(' E2E Test API integrated UI Test',()=> {
    beforeEach('create a user and generate token from API and set Cookies',()=>{
        // user olusturu ve cookie leri set eder
        cy.request({
            method: 'POST',
          //  url :`${Cypress.env('apiUrl')}${Cypress.env('generateUser')}`,
            url :'https://demoqa.com/Account/v1/User',
            body :{
                username: username ,
                password: password
            }
        }).then((response) =>{
            cy.setCookie('userID',response.body.userID);
            cy.setCookie('UserName', response.body.username);
        });
        // generate token and set token cookies
           cy.request({
            method :'POST',
           // url :`${Cypress.env('apiUrl')}${Cypress.env('generateToken')}`,
            url :'https://demoqa.com/Account/v1/GenerateToken',
            body :{
                username: username ,
                password: password
            }
           }).then((response) => {
            cy.setCookie('token', response.body.token);
            cy.setCookie('expires', response.body.expires);
           }) 

    })
    afterEach('Deleting user created for testing API request', () => {
     
        cy.request({
            method :'POST',
            //url :`${Cypress.env('apiUrl')}${Cypress.env('loginAPI')}`,
            url :`${Cypress.env('apiUrl')}${Cypress.env('loginAPI')}`,
            body :{
                username: username ,
                password: password
            }
        }).then((response) => {
                cy.request({
                    method :'DELETE',
                    headers : {
                        authorization: `Bearer ${response.body.token}`
                },
                url :`${Cypress.env('apiUrl')}${Cypress.env('generateUser')}/${response.body.userId}`

                })
        })
    })
    it('check if the user is logged in from UI',{baseUrl: "https://demoqa.com"}, () => {

        cy.visit('/profile');
        cy.get('#userName-value').contains(username).should('be.visible');
    })
})