/// <reference types="cypress" />

describe("Test Description", () => {
    context("Test Scenario", () => {
        beforeEach(() => {
            // navigate to Demo Test Site Walkin link
            cy.visit("https://book.curative.com/sites/17269");
        });

        it.only("test case", () => {
            // Create PCR appointment
            //date&time
            cy.contains('slots available').click();
            cy.contains('slots available').click();
            cy.get('[aria-label="COVID-19 PCR Test"]').click();
            //screening questions
            cy.contains('Continue').click();
            cy.get('[aria-label="None of the above"]').click();
            cy.contains('Continue').click();
            cy.get('[aria-label="No"]').click();
            cy.contains('Continue').click();
            cy.contains('second dose').click();
            cy.contains('Continue').click();
            cy.get('[aria-label="Health care"]').click();
            cy.contains('Continue').click();
            cy.contains('Continue').click();
            cy.get('[aria-label="No"]').click();
            cy.contains('Continue').click();
            cy.contains('phone capable').click();
            cy.wait(1500)
            cy.get('button#continue')
                .should('be.enabled')
                .click();
            //customer contact info    
            cy.get('[name="firstName"]').type("Wesley");
            cy.get('[name="lastName"]').type("CypressNutcase");
            cy.contains('Continue').click();
            cy.get('.MuiInputBase-input').type("03292000");
            cy.contains('Continue').click();
            cy.get('[class=" css-1wa3eu0-placeholder"]').type("123 1/2");
            cy.get('input').type('{downArrow}');
            cy.wait(1500)
            cy.get('input').type('{enter}');
            cy.contains('Continue').click();
            cy.get('[name="email"]').type("reneehtest@yahoo.com");
            cy.contains('Continue').click();
            cy.get('[data-testid="phone-number-input"]').type("2222222222");
            cy.contains('Continue').click();
            cy.wait(1500)
            cy.get('button#continue').should('be.enabled');
            cy.get('button#continue').click();
            //Demograpgics
            preferContinue();
            preferContinue();
            preferContinue();
            //signed agreements
            checkBox();
            checkBox();
            cy.get('[role="checkbox"]').click();
            cy.wait(1500)
            cy.get('button#continue.curative-p1lajl.e13s00td0')
                .should('be.enabled')
                .click();
            cy.wait(1500)
            cy.get('button#continue.curative-p1lajl.e13s00td0')
                .should('be.enabled')
                .click();
            //Do you have Insurance?    
            cy.contains('Yes').click();
            cy.contains('Continue').click();
            cy.contains('Input').click();
            cy.get('[class=" css-tqtki9-container"]').type("Kai");
            cy.get('input').type('{downArrow}');
            cy.wait(1500)
            cy.get('input').type('{enter}');
            cy.contains('Continue').click();
            cy.get('[type="insuranceMemberId"]').type("xyz234PDQ");
            cy.contains('Continue').click();
            cy.get('[class=" css-eq2bga"]').type("Self");
            cy.get('#policyholderRelationship').type('{downArrow}');
            cy.wait(1500)
            cy.get('#policyholderRelationship').type('{enter}');
            cy.contains('Continue').click();
            cy.get('[role="checkbox"]').click();
            cy.contains('Continue').click();

            //confirm & book
            cy.get('#continue').click();


        });

        it("test case", () => { });

        it("test case", () => { });
    });
    function preferContinue() {
        cy.contains('Prefer').click();
        cy.contains('Continue').click();
    }
    function checkBox() {
        cy.get('[role="checkbox"]').click();
        cy.contains('Continue').click();

    }

});