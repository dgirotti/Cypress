/// <reference types="cypress" />

// COMPLETE THE REQUIRED QUESTIONS

export function complete_req_questions(EVENT_NAME) {

    //Let's build your first event page
    cy.wait(2000)
    cy.get('#help-plan-online-input').select('6 - 10 people');
    cy.get('#host-frequency-input').select('Weekly');
    cy.contains('Next').click();
    //About your attendees page
    cy.get('#event-type-input').select('Conference');
    cy.contains('Next').click();
    //Your event details page
    cy.get('#event-name-input').type(EVENT_NAME).invoke('attr', 'value').should('contain', EVENT_NAME);
    cy.get('.eds-g-cell-md-8-12 > .eds-field-styled > .eds-field-styled__border-simulation > .eds-field-styled__internal > .eds-field-styled__input-container > .eds-field-styled__select-wrapper > .eds-field-styled__input').select('Online event');

    //cy.get('.eds-field-styled__input eds-field-styled__select').select('Online event'); 
    cy.contains('Next').click();
    cy.wait(2000)
    cy.url().should('include', '/details');

}

export function package_questions_validations(EVENT_NAME) {
    cy.wait(2000)
    cy.contains('Next').click();
    cy.get(':nth-child(2) > div.eds-align--center > .eds-g-cell-sm-11-12 > .eds-card > .eds-g-cell > :nth-child(1) > .eds-l-md-mar-top-4 > .eds-field-styled > .eds-field__sub > .eds-field__sub--left > .eds-field-styled__annotation').should('contain', 'Please, choose an option for event planners.')
    cy.get(':nth-child(3) > div.eds-align--center > .eds-g-cell-sm-11-12 > .eds-card > .eds-g-cell > :nth-child(1) > .eds-l-md-mar-top-4 > .eds-field-styled > .eds-field__sub > .eds-field__sub--left > .eds-field-styled__annotation').should('contain', 'Please provide a frequency for your event creation.')
    //cy.get('.eds-field-styled__annotation eds-text-bs eds-fx--fade-in eds-l-pad-top-1').should('contain','Please, choose an option for event planners.')
    cy.wait(2000)
    cy.get('#help-plan-online-input').select('6 - 10 people');
    cy.get('#host-frequency-input').select('Weekly');
    cy.contains('Next').click();
    //About your attendees page
    cy.contains('Next').click();
    cy.get('.eds-field-styled__annotation').should('contain', 'Please provide an event type')
    cy.wait(2000)
    cy.get('#event-type-input').select('Conference');
    cy.contains('Next').click();
    //Your event details page
    cy.contains('Next').click();
    cy.get('.eds-field-styled__annotation').should('contain', 'Please set a name for your event')
    cy.get('.eds-field-annotation__note').should('contain', 'Please choose a venue type for event')
    cy.wait(3000)
    cy.get('#event-name-input').type(EVENT_NAME).invoke('attr', 'value').should('contain', EVENT_NAME);
    cy.get('.eds-g-cell-md-8-12 > .eds-field-styled > .eds-field-styled__border-simulation > .eds-field-styled__internal > .eds-field-styled__input-container > .eds-field-styled__select-wrapper > .eds-field-styled__input').select('Online event');
    cy.contains('Next').click();
    cy.wait(2000)
    cy.url().should('include', '/details');
}

export function skip() {
    cy.wait(2000)
    cy.get('#help-plan-online-input').select('6 - 10 people');
    cy.get('#host-frequency-input').select('Weekly');
    cy.get('.eds-l-mar-right-4').click();
    //cy.contains('Skip').click();
    cy.wait(8000)
    cy.url().should('include', 'manage/events/create/?buildItMyself=1');



}

export function back(EVENT_NAME) {
    cy.wait(2000)
    cy.get('#help-plan-online-input').select('6 - 10 people');
    cy.get('#host-frequency-input').select('Weekly');
    cy.contains('Next').click();
    //About your attendees page
    cy.contains('Back').click();
    cy.url().should('include', '/onboarding');
    cy.wait(2000)
    cy.get('#host-frequency-input').select('Monthly');
    cy.contains('Next').click();
    cy.get('#event-type-input').select('Tournament');
    cy.contains('Next').click();
    //Your event details page
    cy.get('#event-name-input').type(EVENT_NAME).invoke('attr', 'value').should('contain', EVENT_NAME);
    cy.get('.eds-g-cell-md-8-12 > .eds-field-styled > .eds-field-styled__border-simulation > .eds-field-styled__internal > .eds-field-styled__input-container > .eds-field-styled__select-wrapper > .eds-field-styled__input').select('Online event');

    //cy.get('.eds-field-styled__input eds-field-styled__select').select('Online event'); 
    cy.contains('Next').click();
    cy.wait(2000)
    cy.url().should('include', '/details');


}