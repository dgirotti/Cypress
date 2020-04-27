/// <reference types="cypress" />

import listingPageSelectors from "/Users/dgirotti/E2E_tests/cypress/selectors/listing-page";


// COMPLETE BASIC INFO PAGE

export function complete_basic_info_page(EVENT_NAME){
 
    cy.url().should('include', 'manage/events/create');
    cy.compareSnapshot("basic_info");
    cy.get('#musicBasicInfo-title').clear().type(EVENT_NAME).invoke('attr', 'value').should('contain', EVENT_NAME);
    cy.wait(1000)
    cy.get('#BasicInfo-venue').contains('option', 'Testing Venue');

    
    const EVENT_DATE = Cypress.moment().add(9, 'days').add(1, 'month').format('MM/DD/YYYY');

    cy.get('#musicBasicInfo-startDate')
        .invoke('attr', 'value')
        .should('contain', EVENT_DATE);
    
    //save form
    cy.get('[data-spec="event-page-action-save"]')
    .contains('Save & Continue')
    .click();

}