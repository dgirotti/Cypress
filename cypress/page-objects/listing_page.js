/// <reference types="cypress" />

import listingPageSelectors from "/Users/dgirotti/E2E_tests/cypress/selectors/listing-page";
import { publish_event, close_publish_popup, change_status_to_canceled, change_status_to_postponed } from "/Users/dgirotti/E2E_tests/cypress/page-objects/header_menu_page";


// LISTING PAGE OF THE EVENT

export function listing_page() {
    cy.location().then((location) => {
        // @ts-ignore
        const eventId = location.pathname.match(new RegExp('/events/(.*)/tickets'))[1];
        publish_event();
        close_publish_popup();
        cy.visit(`/e/${eventId}`);

    })
}

// LISTING PAGE OF CANCELED EVENT

export function canceled_listing_page() {
    cy.location().then((location) => {
        // @ts-ignore
        const eventId = location.pathname.match(new RegExp('/events/(.*)/tickets'))[1];
        publish_event();
        close_publish_popup();
        change_status_to_canceled();
        cy.wait(2000);
        cy.visit(`/e/${eventId}`);

    })
}

// LISTING PAGE OF POSTPONED EVENT

export function postponed_listing_page() {
    cy.location().then((location) => {
        // @ts-ignore
        const eventId = location.pathname.match(new RegExp('/events/(.*)/tickets'))[1];
        publish_event();
        close_publish_popup();
        change_status_to_postponed();
        cy.wait(2000);
        cy.visit(`/e/${eventId}`);

    })
}

// LISTING PAGE OF UNAVAILABLE EVENT

export function unavailable_listing_page() {
    cy.location().then((location) => {
        // @ts-ignore
        const eventId = location.pathname.match(new RegExp('/events/(.*)/tickets'))[1];
        publish_event();
        close_publish_popup();
        cy.wait(2000);
        //cy.get(':nth-child(1) > :nth-child(1) > document-fragment > .eds-dropdown-menu > .eds-dropdown-menu__link > .eds-dropdown-menu__contents').should('have.text', 'Unavailable');
        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .eds-dropdown-menu > .eds-dropdown-menu__link > .eds-dropdown-menu__contents > .eds-global-header__menu-label').should('have.text', 'Unavailable');
        cy.visit(`/e/${eventId}`);

    })
}



// VERIFY THAT DATA IS DISPLAYED PROPERLY ON LISTING PAGE

// @ts-ignore
export function listing_validations(EVENT_NAME) {

    cy.get(listingPageSelectors.externalTicketButton).should('contain', 'Tickets');
    cy.get(listingPageSelectors.eventMusicProps)
        .should('contain', EVENT_NAME)
        .should('contain', 'ALL AGES');


}

export function listing_canceled_verification() {

    cy.get(listingPageSelectors.externalTicketButton).should('contain', 'Details');
    cy.get(listingPageSelectors.eventlistingstatus).should('contain', 'Canceled');

}

export function listing_postponed_verification() {

    cy.get(listingPageSelectors.externalTicketButton).should('contain', 'Details');
    cy.get(listingPageSelectors.eventlistingstatus).should('contain', 'Postponed');

}

export function listing_unavailable_verification() {

    cy.get(listingPageSelectors.eventlistingstatus).should('contain', 'Unavailable');

}

export function click_on_ticket_button() {


    //const confirmationPage = cy.get( '[data-automation="checkout-widget-purchase-confirmation-page"]')

    cy.get('.eds-global-header__quick-link').invoke('removeAttr', 'target').click();
    cy.wait(1000)
    cy.get('.js-embed-ticket-modal-btn ').click();

}

// VOY AL LISTING Y LUEGO VISITO LA PAGINA DEL CHECKOUT DONDE VALIDO EL PC Y HAGO CLICK EN CHECKOUT BUTTON

export function ticket_button_and_checkout() {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
    cy.location().then((location) => {
        // @ts-ignore
        const eventId = location.pathname.match(new RegExp('/events/(.*)/tickets'))[1];
        publish_event();
        close_publish_popup();
        cy.visit(`/e/${eventId}`);
        cy.get('.js-embed-ticket-modal-btn ').click();
        cy.visit(`/checkout-external?eid=${eventId}`);
        cy.get('.eds-text-bs').should('contain', 'Visa required');
        cy.contains('Checkout').click();
        cy.wait(2000);
        cy.contains('Place Order').click();

    })
}