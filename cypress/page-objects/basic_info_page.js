/// <reference types="cypress" />

// COMPLETE MUSIC BASIC INFO PAGE

export function complete_music_basic_info_page(EVENT_NAME){
 
    cy.url().should('include', 'manage/events/create');
    cy.compareSnapshot("basic_info");
    cy.get('#musicBasicInfo-title').clear().type(EVENT_NAME).invoke('attr', 'value').should('contain', EVENT_NAME);
    cy.wait(1000)
    cy.get('#BasicInfo-venue').contains('option', 'Testing Venue');

    
    const EVENT_DATE = Cypress.moment().add(10, 'days').add(1, 'month').format('MM/DD/YYYY');

    cy.get('#musicBasicInfo-startDate')
        .invoke('attr', 'value')
        .should('contain', EVENT_DATE);
    
    //save form
    cy.get('[data-spec="event-page-action-save"]')
    .contains('Save & Continue')
    .click();

}

// COMPLETE BASIC INFO PAGE

export function complete_basic_info_page(EVENT_NAME){

    cy.url().should('include', 'manage/events/create');
    cy.get('.eds-dialog__primary-button > .eds-btn').click();
    //cy.get('.eds-modal__main eds-modal__main--row')
    cy.compareSnapshot("basic_info_page");
    cy.get('#event-basicInfo-title').clear().type(EVENT_NAME).invoke('attr', 'value').should('contain', EVENT_NAME);
    cy.wait(1000)
    cy.get(':nth-child(3) > .radio-selector-label').click();

    //save form
    
    cy.get('[data-spec="event-page-action-save"]')
    .contains('Save & Continue')
    .click();

}