/// <reference types="cypress" />

import {
    navigate,
    login_music_user,
} from "/Users/dgirotti/E2E_tests/cypress/page-objects/login_page";

import {
    create_event,
} from "/Users/dgirotti/E2E_tests/cypress/page-objects/create_event_page";

import {
    complete_basic_info_page,
} from "/Users/dgirotti/E2E_tests/cypress/page-objects/basic_info_page";

import {
    details_page,
} from "/Users/dgirotti/E2E_tests/cypress/page-objects/details_page";

import {
    create_ga_tickets,
    create_ticket_form,
    hidden_ticket,
    save_ticket_form,
} from "/Users/dgirotti/E2E_tests/cypress/page-objects/tickets_page";

import {
    canceled_listing_page,
    listing_canceled_verification,
    postponed_listing_page,
    listing_postponed_verification,
    unavailable_listing_page,
    listing_unavailable_verification
} from "/Users/dgirotti/E2E_tests/cypress/page-objects/listing_page";

import {
    USER_EMAIL,
    USER_PASS,
    EVENT_NAME,

} from "/Users/dgirotti/E2E_tests/cypress/evb-constants/constants";




describe('Manage Differents Event Status Events', () => {

    beforeEach(() => {

        navigate()
        cy.wait(1000);
        login_music_user(USER_EMAIL, USER_PASS)
        cy.wait(1000);
        create_event()
        cy.wait(5000);
        complete_basic_info_page(EVENT_NAME)
        cy.wait(8000)
        details_page()
        cy.wait(5000);

    })

    it('Should click on Change Status and set it as Canceled', () => {

        create_ga_tickets()
        create_ticket_form()
        save_ticket_form()
        canceled_listing_page()
        listing_canceled_verification()

    })

    it('Should click on Change Status and set it as Postponed', () => {

        create_ga_tickets()
        create_ticket_form()
        save_ticket_form()
        postponed_listing_page()
        listing_postponed_verification()

    })

    it('Status should be UNAVAILABLE', () => {

        hidden_ticket()
        unavailable_listing_page()
        listing_unavailable_verification()

    })

})