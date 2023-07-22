class Auth{
    // class ismi file ismi ile aynı olmayabilir
    //file içine birden cok class koyulabilir

    login(username, password){
        cy.get('[name="username"]').type(username);
        cy.get('[name="password"]').type(password);
        cy.get('#wooden_spoon').click();

    }

    logout(){
        cy.contains('Logout').should('be.visible').click();
    }
}

const auth = new Auth(); // object of the clas we made

class Locators{ //yeni class yaratabililirzz, selenium daki find by i nasıl yapabilirz
    get userName(){
        return cy.get('[name="username"]', {timeout :10000}); // element içi özel bekleme süresi plamnlaanabilir
    }

    get password(){
        return cy.get('[name="password"]',{timeout:10000});// timeout is dynamic wait
    }
    get submit(){
        return cy.get('#wooden_spoon',{timeout:10000});
    }
}
const locators = new Locators();
module.exports= {
    auth,locators
}