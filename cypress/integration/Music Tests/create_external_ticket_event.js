/// <reference types="cypress" />

import { 
    navigate,
    login_music_user,
}from "/Users/dgirotti/E2E_tests/cypress/page-objects/login_page";

import{
    create_event,
}from "/Users/dgirotti/E2E_tests/cypress/page-objects/create_event_page";

import{
    complete_music_basic_info_page,
}from "/Users/dgirotti/E2E_tests/cypress/page-objects/basic_info_page";
    
import{
    details_page,
}from "/Users/dgirotti/E2E_tests/cypress/page-objects/details_page";
    
import{ 
    create_et_tickets,
}from "/Users/dgirotti/E2E_tests/cypress/page-objects/tickets_page";

import{ 
    listing_page,
    listing_validations,
} from "/Users/dgirotti/E2E_tests/cypress/page-objects/listing_page";

import{
    USER_EMAIL,
    USER_PASS,
    EVENT_NAME
}from "/Users/dgirotti/E2E_tests/cypress/evb-constants/constants";

 
 describe('Create an Externally Ticket Event', () =>{

    it('Should create an Externally Ticket Event', () =>{

        navigate()   
        cy.wait(1000); 
        login_music_user(USER_EMAIL,USER_PASS) 
        cy.wait(1000);
        create_event()
        cy.wait(5000);
        complete_music_basic_info_page(EVENT_NAME)
        cy.wait(8000)
        details_page()
        cy.wait(5000);
        create_et_tickets()
        listing_page()
        listing_validations(EVENT_NAME)

    })

 })