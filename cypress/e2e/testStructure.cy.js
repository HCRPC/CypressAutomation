/// <reference types="cypress" />
describe('Context : My first tests',()=>{
    before(()=>{
        // runs once before all test cases in describe block, like before class
    })
    beforeEach(()=>{
        //run before each testcases, before method in TestNG
        cy.clearCookies();
    })
    after(()=>{
        //similar to afterClass in TestNG runs once after all tests finished
    })
    afterEach(()=>{
        // similar to afterMethod in testNG
    })
    it('Opening a web app', ()=>{
        cy.visit('/registration_form');
        cy.get(':nth-child(1) > .col-sm-5 > .form-control').click();
       //cy.get(':nth-child(9) > a').click();
        //cy.get(':nth-child(4) > :nth-child(1) > a').click();
    })
    it('Test 2',()=>{
        expect(false).to.equal(false);
    })
    it('Test 3',()=>{
        expect(false).not.to.equal(true);
        expect('haci').to.equal('haci');
    })
    it('Test 4',()=>{
        expect(5).to.equal(5);
    })
    it('Test 5',()=>{
        expect(true).to.equal('5'==5);
    })
})