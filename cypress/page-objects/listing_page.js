/// <reference types="cypress" />

import listingPageSelectors from "/Users/dgirotti/E2E_tests/cypress/selectors/listing-page";
import {publish_event, close_publish_popup,change_status_to_canceled,change_status_to_postponed} from "/Users/dgirotti/E2E_tests/cypress/page-objects/header_menu_page";


// LISTING PAGE OF THE EVENT

export function listing_page(){
    cy.location().then((location) => {
        const eventId = location.pathname.match(new RegExp('/events/(.*)/tickets'))[1];
        publish_event();
        close_publish_popup();
        cy.visit(`/e/${eventId}`);
        
    })
}

// LISTING PAGE OF CANCELED EVENT

export function canceled_listing_page(){
    cy.location().then((location) => {
        const eventId = location.pathname.match(new RegExp('/events/(.*)/tickets'))[1];
        publish_event();
        close_publish_popup();
        change_status_to_canceled();
        cy.wait(2000);
        cy.visit(`/e/${eventId}`);
        
    })
}

// LISTING PAGE OF POSTPONED EVENT

export function postponed_listing_page(){
    cy.location().then((location) => {
        const eventId = location.pathname.match(new RegExp('/events/(.*)/tickets'))[1];
        publish_event();
        close_publish_popup();
        change_status_to_postponed();
        cy.wait(2000);
        cy.visit(`/e/${eventId}`);
        
    })
}

// LISTING PAGE OF UNAVAILABLE EVENT

export function unavailable_listing_page(){
    cy.location().then((location) => {
        const eventId = location.pathname.match(new RegExp('/events/(.*)/tickets'))[1];
        publish_event();
        close_publish_popup();
        cy.wait(2000);
        cy.get(':nth-child(1) > :nth-child(1) > document-fragment > .eds-dropdown-menu > .eds-dropdown-menu__link > .eds-dropdown-menu__contents').should('have.text', 'Unavailable');
        cy.visit(`/e/${eventId}`);
        
    })
}


   
// VERIFY THAT DATA IS DISPLAYED PROPERLY ON LISTING PAGE
    
export function listing_validations(EVENT_NAME){

        cy.get(listingPageSelectors.externalTicketButton).should('contain', 'Tickets');
        cy.get(listingPageSelectors.eventMusicProps)
        .should('contain', EVENT_NAME)
        .should('contain', 'ALL AGES');
        

}

export function listing_canceled_verification(){

    cy.get(listingPageSelectors.externalTicketButton).should('contain', 'Details');
    cy.get(listingPageSelectors.eventlistingstatus).should('contain', 'Canceled');

}

export function listing_postponed_verification(){

    cy.get(listingPageSelectors.externalTicketButton).should('contain', 'Details');
    cy.get(listingPageSelectors.eventlistingstatus).should('contain', 'Postponed');

}

export function listing_unavailable_verification(){

    cy.get(listingPageSelectors.eventlistingstatus).should('contain', 'Unavailable');

}