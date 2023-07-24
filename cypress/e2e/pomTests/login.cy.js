import {auth} from '../../support/pages/auth';
import { navigateTo } from '../../support/pages/navigation';
const LoginLocators = require("../../support/pages/auth"); // böyle yaparsan hem auth hemde locators objesi methodalarına ulasabilirsin


describe('Auth : login user with different ways', ()=>{
// navigaton to test page
beforeEach('navigate to login page',()=>{
    cy.clearAllCookies();
    navigateTo.loginPage(); // this methıod comes from POM
})
it.skip('happy paty scenario using POM function',()=>{

   // auth.login('hardcoded variables')-- not a good way
   cy.fixture('user').then((user)=>{
    auth.login(user.user2.username,user.user2.password);
   })
   // lets call our custom command to verfiy the textx
   cy.textExists('You logged into a secure area!');
   auth.logout();
})
it.skip('happy paty scenario with locators',()=>{

    // auth.login('hardcoded variables')-- not a good way
    cy.fixture('user').then((user)=>{
    // auth.login(user.user2.username,user.user2.password);
    // locator object i import etmek lazım
    LoginLocators.locators.userName.type(user.user2.username);
    LoginLocators.locators.password.type(user.user2.password);
    LoginLocators.locators.submit.click();
    })
    // lets call our custom command to verfiy the textx
    cy.textExists('You logged into a secure area!');
    auth.logout();
 })
 it('check invalid user credentials',()=>{
    auth.login('invalidusername','invalidpassword');
    // verify error message
    cy.textExists('Your username is invalid!');
 })
})