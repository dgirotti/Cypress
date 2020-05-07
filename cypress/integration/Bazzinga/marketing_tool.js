/// <reference types="cypress" />

import {
    navigate,
    login_user,
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
    BAZZINGA_USER_EMAIL,
    USER_PASS,
    EVENT_NAME,

} from "/Users/dgirotti/E2E_tests/cypress/evb-constants/constants";

import {
    create_tickets,
    create_ticket_form,

} from "/Users/dgirotti/E2E_tests/cypress/page-objects/tickets_page";

import {
    marketing_tool,
} from "/Users/dgirotti/E2E_tests/cypress/page-objects/marketing_tool_page";



describe('BAZZINGA Marketing tools tests', () => {

    beforeEach(() => {

        navigate();
        cy.wait(1000);
        login_user(BAZZINGA_USER_EMAIL, USER_PASS);
        cy.wait(1000);
        create_event();
        complete_basic_info_page(EVENT_NAME)
        details_page()
        create_tickets()
        create_ticket_form()

    })

    it('Should click on Marketing tool', () => {
        
        marketing_tool()
    })
})