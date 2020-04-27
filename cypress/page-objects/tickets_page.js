/// <reference types="cypress" />

import listingPageSelectors from "/Users/dgirotti/E2E_tests/cypress/selectors/listing-page";
import commonEventCreationSelectors from "/Users/dgirotti/E2E_tests/cypress/selectors/create";

// DIFFERENT TICKETS CREATION (GA - GA-HOLD - EXTERNAL TICKETING)

// GA TICKETS

export function create_ga_tickets(){

    cy.url().should('include', '/tickets');
    cy.compareSnapshot("tickets");

    cy.contains('General Admission').trigger('mouseover');
    cy.contains('Create Tickets').click();
    cy.wait(5000)
    

    const TICKETS_EMPTY_STATE_TEXT = "Let's create tickets";
    const CREATE_TICKET_BUTTON = 'Create Ticket';

    cy.get('.eds-empty-state__title')
        .should('exist')
        .contains(TICKETS_EMPTY_STATE_TEXT);

    cy.get('button')
        .contains(CREATE_TICKET_BUTTON)
        .click({force: true});
}
 
// COMPLETE TICKET FORM

export function create_ticket_form(){

       cy.url().should('include', '/tickets/create');

       cy.get('[data-spec="eds-structure-drawer-right"]')
           .should('exist');

       cy.get('[data-spec="eds-structure-drawer-header"]').as('createTicketHeader')
       cy.get('.eds-structure__drawer-content').as('createTicketContent')
       cy.get('.eds-fixed-bottom-bar-layout__bar').as('createTicketFooter');

       const ADD_TICKET_TEXT = 'Add Ticket';

       cy.get('@createTicketHeader')
           .should('exist')
           .get('[data-spec="eds-structure-drawer-title"]')
           .contains(ADD_TICKET_TEXT);

       cy.get('@createTicketFooter')
           .should('exist')
           .get('[data-automation="coyote-ticket-form-action-save"]')
           .as('ticketSubmitButton');

       /* cy.get('@createTicketContent')
           .should('exist')
           .find('.segmented-control-label--checked')
           .contains('Paid')*/

       const GA_TICKET_DEFAULT_TITLE = 'General Admission';
       const GA_TICKET_NEW_TITLE = 'VIP';

       cy.get('@createTicketContent')
           .get('[data-automation="coyote-ticketform-title"]')
           .as('ticketTitleInput');

      /* cy.get('@ticketTitleInput')
           .invoke('attr', 'value')
           .should('contain', GA_TICKET_DEFAULT_TITLE);*/

       cy.get('@ticketTitleInput')
           .clear()
           .type(GA_TICKET_NEW_TITLE)
           .invoke('attr', 'value')
           .should('contain', GA_TICKET_NEW_TITLE);

       cy.get('@createTicketContent')
           .get('[data-automation="coyote-ticketform-quantity"]')
           .clear()
           .type('200')
           .invoke('attr', 'value')
           .should('contain', '200');

        cy.get('@createTicketContent')
           .get('[data-automation="coyote-ticketform-price"]')
           .clear()
           .type('10')
           .invoke('attr', 'value')
           .should('contain', '10');

        cy.get('#country-currency-link').click();

        country_currency();
        cy.wait(6000);
       
        /*cy.get('@ticketSubmitButton')
           .get('[data-automation="coyote-ticket-form-action-save"]')
           .contains('Save')
           .click();*/
}   

export function save_ticket_form(){

    cy.get('@ticketSubmitButton')
    .get('[data-automation="coyote-ticket-form-action-save"]')
    .contains('Save')
    .click();
}

// COUNTRY AND CURRENCY MODAL

export function country_currency(){
    
    cy.wait(6000);

    // COUNTRY AND CURRENCY MODAL
    cy.get(commonEventCreationSelectors.edsModal).should('exist');

    cy.get(commonEventCreationSelectors.checkoutSettingsCountry).should(
        'contain',
        'United States',
    );

    cy.get(commonEventCreationSelectors.checkoutSettingsCurrency).should(
        'contain',
        'USD',
    );

    cy.get(commonEventCreationSelectors.checkoutSettingsPrimaryButton)
        .should('exist')
        .click();
}

// EXTERNAL TICKETING TICKETS

export function create_et_tickets(){
    
    const startDate = Cypress.moment().format('MM/DD/YYYY')
    const ticket_provider = 'Eventbrite'
    const url_link = 'https://www.eventbrite.com'

    cy.url().should('include', '/tickets');
    cy.compareSnapshot("tickets");
    cy.contains('External Ticketing').trigger('mouseover');
    cy.contains('Setup External Link').click();
    cy.wait(5000)
   
    cy.get('#externalTicketing-ticketingProvider').clear().type(ticket_provider).invoke('attr', 'value').should('contain',ticket_provider);
    cy.get('#externalTicketing-purchaseUrl',).type(url_link).invoke('attr', 'value').should('contain',url_link);
    cy.get('#externalTicketing-singlePrice').clear().type('10').invoke('attr', 'value').should('contain', '10');
    cy.get('#externalTicketing-maxPrice').clear().type('50').invoke('attr', 'value').should('contain', '50');;
    
    cy.get('#externalTicketing-startDate')
    .invoke('attr', 'value')
    .should('contain', startDate);

    cy.contains('Save').click();
}


// GA HOLDS SECTION

export function create_ga_holds_tickets(){

    cy.url().should('include', '/tickets');
    cy.compareSnapshot("tickets");
    cy.contains('General Admission').trigger('mouseover');
    cy.contains('Create Tickets').click();
    cy.wait(5000)
    
    const TICKETS_EMPTY_STATE_TEXT = "Let's create tickets";
    const CREATE_SECTION_LINK = 'Create a section';

    cy.get('.eds-empty-state__title')
        .should('exist')
        .contains(TICKETS_EMPTY_STATE_TEXT);

   
    // CREATE A SECTION
    
    const section_name = 'VIP'
    const section_capacity= '500'
    cy.get('#create-section-link')
        .contains(CREATE_SECTION_LINK)
        .click({force: true});
    cy.url().should('include', '/tickets#');
    cy.get('#sectionName').type(section_name).invoke('attr', 'value').should('contain',section_name);
    cy.get('#sectionCapacity').type(section_capacity).invoke('attr', 'value').should('contain',section_capacity);
    cy.get('.eds-modal__button-bar__primary-secondary > .eds-btn--fill').click();

    // CREATE A TICKET INSIDE THE SECTION

    cy.wait(5000);

    cy.url().should('include', '/tickets#');

    cy.wait(5000);

    cy.get('.add-ticket-type__container > .eds-btn--button').click();

    create_ticket_form() 

    cy.url().should('include', '/tickets');
    save_ticket_form()

}

// CREATE A HOLD TICKET

export function create_hold_ticket(){

    const hold_name = 'ARTIST'
    const hold_capacity= '5'
    const access_code= 'code'
    const discount= '50'
    cy.contains('Hold').click();
    cy.wait(2000);
    cy.url().should('include', '/holds');
    
    cy.wait(3000);

    cy.get('.eds-show-up-md > .eds-btn').click();
    cy.get('#hold-name').type(hold_name).invoke('attr', 'value').should('contain',hold_name);
    cy.get('#hold-quantity-name').type(hold_capacity).invoke('attr', 'value').should('contain',hold_capacity);
    cy.get('.eds-g-cell > .eds-btn').click();
    cy.wait(3000);
    cy.get('.eds-btn--link').click();
    cy.get('.hold-code-drawer-title__text > p').should('have.text', 'Edit Hold')

    //ADD A PROMO CODE TO A HOLD TICKET

    cy.get('.eds-l-pad-vert-3 > .eds-btn--button').click();
    cy.wait(2000);
    cy.get('#access-code').type(access_code).invoke('attr', 'value').should('contain',access_code);
    cy.get('#discount-percent').type(discount).invoke('attr', 'value').should('contain',discount);
    cy.get('.eds-g-cell > .eds-btn').click();
    cy.wait(2000);
    cy.get('.eds-g-cell > .eds-btn').click();   // me trae el formulario de hold vacio. 
    cy.wait(3000);
    cy.url().should('include', '/holds');
    cy.wait(2000);
    cy.get('.eds-g-cell-2-12 > .eds-text--right').should('have.text','1');


}

// CREATE A HIDDEN TICKET

export function hidden_ticket(){

    create_ga_tickets()
    create_ticket_form()
    cy.get(':nth-child(3) > .eds-field-styled__border-simulation > .eds-field-styled__internal > .eds-field-styled__input-container > .eds-field-styled__select-wrapper > .eds-field-styled__input').select('Hidden')
    save_ticket_form()
}   

/*export function payment_constraints(){

    create_ga_tickets()
    create_ticket_form()
    //seleccionar pc option
    //seleccinar la tj deseada
    save_ticket_form()
    

}*/