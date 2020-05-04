/// <reference types="cypress" />

import {
    close_publish_popup,
} from "/Users/dgirotti/E2E_tests/cypress/page-objects/header_menu_page";

// CHANGE STATUS TO POSTPONE USING THE BANNER IN DASHBOARD PAGE.

export function postpone_event_banner() {

    cy.get('.eds-g-cell > .eds-btn').click();
    cy.contains('Get started').click();
    cy.contains('Update status').click();
    cy.contains('Visit basic info').click();
    cy.contains('Email attendees').click();
    cy.contains('Refund orders').click();
    cy.contains('Learn more').click();
    cy.url().should('include', 'shouldshowpublishbanner=1');
    cy.get('.eds-structure__main > .eds-notification-bar--has-close > .eds-notification-bar__content > .eds-notification-bar__content-child').should('have.text', "Nice work, you've successfully postponed your event")
    cy.reload();
    close_publish_popup();
    cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .eds-dropdown-menu > .eds-dropdown-menu__link').should('have.text', 'Postponed');
    cy.compareSnapshot("afterpostdashboard");
}

export function cancel_event_banner() {

    cy.get('#nextStepOption').select('Cancel')
    cy.get('.eds-g-cell > .eds-btn').click();
    cy.contains('Get started').click();
    cy.contains('Email attendees').click();
    cy.contains('Refund orders').click();
    cy.contains('Update status').click();
    cy.get('.eds-structure__main > .eds-notification-bar--has-close > .eds-notification-bar__content > .eds-notification-bar__content-child').should('have.text',"Listing updated as 'Canceled'")
    cy.contains('Mark as complete').click();
    cy.get('.eds-structure__main > .eds-notification-bar--has-close > .eds-notification-bar__content > .eds-notification-bar__content-child').should('have.text',"Event successfully canceled" )
    cy.reload();
    close_publish_popup();
    cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .eds-dropdown-menu > .eds-dropdown-menu__link').should('have.text', 'Canceled');
    cy.compareSnapshot("aftercanceldashboard");
}
