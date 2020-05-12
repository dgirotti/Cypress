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
    publish_event,
    close_publish_popup,
} from "/Users/dgirotti/E2E_tests/cypress/page-objects/header_menu_page";

import {
    postpone_event_banner,
    cancel_event_banner,
    online_event_banner,
    cancel_remove
} from "/Users/dgirotti/E2E_tests/cypress/page-objects/banner_status_page";

import{
    click_on_ticket_button
}from "/Users/dgirotti/E2E_tests/cypress/page-objects/listing_page";


describe('BAZZINGA Postpone and Cancel events using the banner flow', () => {

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
        publish_event()
        close_publish_popup()

    })


    it('Should click on Change Status from Banner and set it as Postpone', () => {

        postpone_event_banner()

    })


    it('Should click on Change Status from Banner and set it as Canceled', () => {

        cancel_event_banner()

    })

    it('Should click on Change Status from Banner and set it as Canceled', () => {

        online_event_banner()

    })

    it.only('Shoud display the pop up message ', ()=>{
        click_on_ticket_button();
        //LLAMAR A LA FUNCION QUE COMPRA EL TICKET DEL CHECKOUT
        //cancel_remove()
    })
})