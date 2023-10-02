describe('spartans api tests', {baseUrl: 'http://54.237.118.39:8000/'}, ()=>{

    it('get a spartan', ()=>{
        cy.request('GET', 'api/spartans/100').then((response)=>{
            expect(response.status).to.equal(200);
            expect(response.body.name).to.equal("Terrence")
        })
    })
    it('POST one spartan to Database'), () => {
        cy.request({
            method : 'POST',
            url : 'api/spartans',
            body : {
                "gender": "Male",
                "name": "salesho",
                "phone" : "123456"
            }
    }
    ).then((response) => {
        expect(response.status).to.equal(201);
        expect(response.body.success).to.equal('A Spartan is Born!')
    })
}
})