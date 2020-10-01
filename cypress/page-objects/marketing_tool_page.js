// <reference types="cypress" />

import {publish_event, close_publish_popup} from "/Users/dgirotti/E2E_tests/cypress/page-objects/header_menu_page";

export function marketing_tool(){

    cy.location().then((location) => {
        const eventId = location.pathname.match(new RegExp('/events/(.*)/tickets'))[1];
        publish_event();
    
        //URL FOR ACCESING TO MARKETING TOOL
        cy.visit(`/myevent/${eventId}/?janus_fv=exp_eb_141015_marketing_tool=B`);

        // MARKETING TOOL ON LEFT MENU
        cy.contains('Invite & Promote').click();
        cy.contains('Marketing Overview').click();
        //MARKETING PAGE OVERVIEW
        cy.get('h3').should('contain', 'Add to Facebook');
        cy.get('h3').should('contain', 'Email Campaigns');
        cy.get('h3').should('contain', 'Paid Social Ads');
        cy.get('h3').should('contain', 'Website Integrations');
        //CLICKING ON FACEBOOK SET UP AND GOING BACK. 
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .eds-l-mar-left-1 > .eds-text-weight--heavy > .eds-link > .eds-l-mar-right-1').click();
        cy.get('h1').should('contain', 'Add to facebook')
        cy.get('.eds-breadcrumbs__item--link').click()

    })
}