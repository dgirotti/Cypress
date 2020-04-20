/// <reference types="cypress" />

import { 
    navigate,
    login_music_user,
}from "/Users/dgirotti/E2E_tests/cypress/page-objects/login_page";

import{
    create_event,
}from "/Users/dgirotti/E2E_tests/cypress/page-objects/create_event_page";

import{
     complete_basic_info_page,
}from "/Users/dgirotti/E2E_tests/cypress/page-objects/basic_info_page";
    
import{
    details_page,
}from "/Users/dgirotti/E2E_tests/cypress/page-objects/details_page";
    
import{ 
    create_ga_holds_tickets,
    create_hold_ticket,
}from "/Users/dgirotti/E2E_tests/cypress/page-objects/tickets_page";

import{
    publish_event,
    close_publish_popup,
    logout
}from "/Users/dgirotti/E2E_tests/cypress/page-objects/header_menu_page";


import{
    USER_EMAIL,
    USER_PASS,
    EVENT_NAME,
    USER_NAME
}from "/Users/dgirotti/E2E_tests/cypress/evb-constants/constants";

describe('Create a GA Hold Event', () =>{

    // before bloque va aca. 

    it('Should create a GA HOLD Ticket ', () =>{

    navigate()   
    cy.wait(1000); 
    login_music_user(USER_EMAIL,USER_PASS) 
    cy.wait(1000);
    create_event()
    cy.wait(5000);
    complete_basic_info_page(EVENT_NAME)
    cy.wait(8000)
    details_page()
    cy.wait(5000);
    create_ga_holds_tickets()
    cy.wait(5000);
    create_hold_ticket()
    publish_event()
    close_publish_popup()
    logout(USER_NAME)
    })
})