/// <reference types="cypress" />

import { 
	navigate,
    login_music_user,
    create_event,
    complete_basic_info_page,
    details_page,
    create_ga_tickets,
    create_ticket_form,
    country_currency,
    publish_event,
    close_publish_popup,
	logout

 } from "/Users/dgirotti/E2E_tests/cypress/page-objects/eventbrite-page";

import{
    USER_EMAIL,
    USER_PASS,
    EVENT_NAME,
    USER_NAME
}from "/Users/dgirotti/E2E_tests/cypress/evb-constants/constants";


describe('Create GA On Sale Event under Music Organization', () =>{
    
    it('Should login using a Music User', () =>{

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
        create_ga_tickets()
        create_ticket_form()
        country_currency()
        publish_event()
        close_publish_popup()
        logout(USER_NAME) 
	})	

})