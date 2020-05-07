/// <reference types="cypress" />

import {
    close_publish_popup,
} from "/Users/dgirotti/E2E_tests/cypress/page-objects/header_menu_page";

// CHANGE STATUS TO POSTPONE USING THE BANNER IN DASHBOARD PAGE.

export function postpone_event_banner() {

    cy.get('.eds-g-cell > .eds-btn').click();
    cy.contains('Get started').click();
    cy.contains('Update status').click();
    cy.get('.eds-notification-bar__content-child').should('be.visible').and('contain', "Event listing status changed to 'Postponed'")
    cy.contains('Visit basic info').click();
    cy.contains('Email attendees').click();
    cy.contains('Refund orders').click();
    cy.contains('Learn more').click();
    cy.url().should('include', 'shouldshowpublishbanner=1');
    //cy.get('.eds-structure__main > .eds-notification-bar--has-close > .eds-notification-bar__content > .eds-notification-bar__content-child').should('have.text', "Nice work, you've successfully postponed your event")
    cy.reload();
    close_publish_popup();
    cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .eds-dropdown-menu > .eds-dropdown-menu__link').should('have.text', 'Postponed');
    cy.compareSnapshot("afterpostdashboard");
}

// CHANGE STATUS TO CANCEL USING THE BANNER IN DASHBOARD PAGE.

export function cancel_event_banner() {

    cy.get('#nextStepOption').select('Cancel')
    cy.get('.eds-g-cell > .eds-btn').click();
    cy.contains('Get started').click();
    cy.contains('Email attendees').click();
    cy.contains('Refund orders').click();
    cy.contains('Update status').click();
    cy.get('.eds-notification-bar__content-child').should('be.visible').and('contain', "Listing updated as 'Canceled'")
    cy.contains('Mark as complete').click();
    //cy.get('.eds-structure__main > .eds-notification-bar--has-close > .eds-notification-bar__content > .eds-notification-bar__content-child').should('have.text', "Event successfully canceled")
    cy.reload();
    close_publish_popup();
    cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .eds-dropdown-menu > .eds-dropdown-menu__link').should('have.text', 'Canceled');
    cy.compareSnapshot("aftercanceldashboard");
}

// CONVERT TO ONLINE EVENT.

export function online_event_banner() {

    cy.get('#nextStepOption').select('Convert to online event')
    cy.contains('Continue').click();
    cy.contains('Get started').click();
    cy.contains('Visit basic info').click();
    cy.contains('Create event page').click();
    cy.contains('Email attendees').click();
    cy.contains('Mark as complete').click();
    cy.get('#publish-success').should('be.visible').and('contain', "Congratulations, your event is live on Eventbrite!");
    close_publish_popup();
    cy.compareSnapshot("onlinedashboard");
}

// CANCEL WHEN A TICKET WAS SOLD. FIRST I NEED TO BUY A TICKET. 

export function cancel_remove() {
    cy.get('#nextStepOption').select('Cancel');
    cy.get(':nth-child(2) > .eds-radio__delegate').click();
    cy.get('.eds-g-cell > .eds-btn').click();
    cy.contains('Get started').click();
    cy.get(':nth-child(3) > .actions-list-item-title').click();
    cy.contains('Remove listing').click();
   // cy.get('.eds-modal__content').should('be.visible').and('contain','Refund orders to delete');
   // cy.get('.eds-btn--link').click();
}
