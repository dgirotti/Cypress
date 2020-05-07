// <reference types="cypress" />

import {publish_event, close_publish_popup} from "/Users/dgirotti/E2E_tests/cypress/page-objects/header_menu_page";

export function marketing_tool(){

    cy.location().then((location) => {
        const eventId = location.pathname.match(new RegExp('/events/(.*)/tickets'))[1];
        publish_event();
        close_publish_popup();
        //URL FOR ACCESING TO MARKETING TOOL
        cy.visit(`/myevent/${eventId}/?janus_fv=exp_eb_134289_marketing_tool_paid_events=C`);

        // MARKETING TOOL ON LEFT MENU
        cy.contains('Invite & Promote').click();
        cy.contains('Marketing Overview').click();
        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .eds-text-bl').should('contain.text', 'Add to Facebook');
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .eds-text-bl').should('contain.text', 'Email Campaigns');
        cy.get(':nth-child(2) > :nth-child(3) > :nth-child(1) > :nth-child(1) > .eds-text-bl').should('contain.text', 'Paid Social Ads');
        cy.get(':nth-child(2) > :nth-child(4) > :nth-child(1) > :nth-child(1) > .eds-text-bl').should('contain.text', 'Website Integrations');


    })
}