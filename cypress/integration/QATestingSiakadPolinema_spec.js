describe("User melakukan login pada website SIAKAD polinema", () => {

    it("User memasukkan username dan password yang salah", () => {
        cy.visit('http://siakad.polinema.ac.id/');
        cy.get('#username').type('Chairil');
        cy.get('#password').type('Chairil');
        cy.get('#form_login > div.form-actions > button').click()
        cy.contains('Username / Password Salah');
    });

    it("User memasukkan username benar dan password salah", () => {
        cy.visit('http://siakad.polinema.ac.id/');
        cy.get('#username').type('1631710109');
        cy.get('#password').type('1631710109');
        cy.get('#form_login > Div.form-actions > button').click()
        cy.contains('Username / Password Salah');
    });

    it("User memasukkan username yang salah dan password yang benar", () => {
        cy.visit('http://siakad.polinema.ac.id/');
        cy.get('#username').type('Chairil');
        cy.get('#password').type('19970717GI');
        cy.get('#form_login > div.form-actions > button').click()
        cy.contains('Username / Password Salah');
    });

    it("User tidak memasukkan username benar dan password", () => {
        cy.visit('http://siakad.polinema.ac.id/');
        cy.get('#username').clear();
        cy.get('#password').clear();
        cy.get('#form_login > Div.form-actions > button').click()
        cy.contains('Username harus diisi');
    });

    it("User memasukkan username dan password benar", () => {
        cy.visit('http://siakad.polinema.ac.id/');
        cy.get('#username').type('1631710109');
        cy.get('#password').type('19970717GI');
        cy.get('#form_login > Div.form-actions > button').click()
    });

    it("User hanya memasukkan username dan dan mengosongkan password", () => {
        cy.visit('http://siakad.polinema.ac.id/');
        cy.get('#username').type('Chairil');
        cy.get('#password').clear();
        cy.get('#form_login > div.form-actions > button').click()
        cy.contains('Username harus diisi');
    });

    it("User hanya memasukkan password dan mengosongkan username", () => {
        cy.visit('http://siakad.polinema.ac.id/');
        cy.get('#username').clear();
        cy.get('#password').type('19970717GI');
        cy.get('#form_login > Div.form-actions > button').click()
        cy.contains('Username harus diisi');
    });
});