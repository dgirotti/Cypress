/// <reference types="cypress" />

import {
    navigate,
    login_music_user,
} from "/Users/dgirotti/E2E_tests/cypress/page-objects/login_page";

import { create_event } from "/Users/dgirotti/E2E_tests/cypress/page-objects/create_event_page";

import { complete_music_basic_info_page } from "/Users/dgirotti/E2E_tests/cypress/page-objects/basic_info_page";

import { details_page } from "/Users/dgirotti/E2E_tests/cypress/page-objects/details_page";

import { payment_constraints } from "/Users/dgirotti/E2E_tests/cypress/page-objects/tickets_page";

import { checkout_modal } from "/Users/dgirotti/E2E_tests/cypress/page-objects/checkout_page";

import {
    USER_EMAIL,
    USER_PASS,
    EVENT_NAME,
} from "/Users/dgirotti/E2E_tests/cypress/evb-constants/constants";

import { ticket_button_and_checkout } from "/Users/dgirotti/E2E_tests/cypress/page-objects/listing_page"


describe('Create GA Event under Music Organization with a PC ticket ', () => {

    it('Should create a ticket  using a PC', () => {

        navigate()
        login_music_user(USER_EMAIL, USER_PASS)
        cy.wait(1000);
        create_event()
        cy.wait(5000);
        complete_music_basic_info_page(EVENT_NAME)
        details_page()
        payment_constraints()
        ticket_button_and_checkout()
        //checkout_modal()

    })

})