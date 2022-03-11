///reference types ="Cypress" />

describe('book symptomatic patient', () =>{
    it('should book appt for symptomatic patient', () =>{
        ///visit site
        cy.visit('https://staging-book.curative.com/sites/200');
        ///choose day
        cy.contains('slots available').click();
        ///choose time
        cy.contains('slots available').click();
        ///choose test type
        cy.get('button[aria-label="RT-PCR test for COVID-19"]').click();
        cy.contains('Continue').click();
        ///screening questions
        cy.contains('New loss of smell').click();
        cy.contains('Continue').click();
        cy.get('.MuiInputBase-input').click().type(Cypress.moment().format('MM DD, YYYY'));
        cy.get('#continue').click();
        ///vaccine question
        cy.contains('Yes').click();
        cy.get('#continue').click();
        ///employment industry
        cy.contains('Health').click();
        cy.get('#continue').click();
        ///let's book
        cy.get('#continue').click();
        ///previous appt
        cy.get('[aria-label="No"]').should("not.be.disabled").click();
        cy.get('#continue').click();
        ///contact pref
        cy.contains('I do not').click();
        ///post verif
        cy.wait(400);
        cy.get('button#continue')
        .should('be.enabled')
        .click();
        ///fullname
        cy.get('[aria-label="First Name"]').type('Nachito');
        cy.get('[aria-label="Last Name"]').type('Oldman');
        cy.get('#continue').click();
        ///DOB
        cy.get('.MuiInputBase-input').type('07242000');
        cy.get('#continue').click();
        ///homeaddress
        cy.contains('E.g. 123 Broadway').type('123 1/2 E');
        cy.get('input').type('{downArrow}');
        cy.wait(400);
        cy.get('input').type('{enter}');
        cy.get('#continue').click();
        ///email
        cy.get('[aria-label="email"]').type('reneehtest@yahoo.com'); 
        cy.get('#continue').click();
        ///phoneNumber
        cy.get('[data-testid=phone-number-input]').type('9998887777');
        cy.get('#continue').click();
        ///basicComplete
        cy.get('#continue').click();
        ///sex
        cy.contains('Prefer').click();
        cy.get('#continue').click();
        ///race
        cy.contains('Prefer').click();
        cy.get('#continue').click();    
        ///ethnicity
        cy.contains('Prefer').click();
        cy.get('#continue').click();
        ///signatures
        cy.get('[role="checkbox"]').click();
        cy.get('#continue').click();
        cy.get('[role="checkbox"]').click();
        cy.get('#continue').click();
      
        ///DemoComplete
        cy.get('#continue').click();
        ///Insurance
        cy.get('[aria-label="No"]').click();
        cy.get('#continue').click();
        ///ID
        cy.contains('I don').click();
        //verify no insurance
        cy.get('[role="checkbox"]').click();
        cy.get('#continue').click();
        ///confirm and book
        cy.contains('Confirm').click();
    })
})