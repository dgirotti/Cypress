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
    create_ga_tickets,
    create_music_ticket_form,
    save_ticket_form,
}from "/Users/dgirotti/E2E_tests/cypress/page-objects/tickets_page";

import{
    publish_event,
    close_publish_popup,
    logout
}from "/Users/dgirotti/E2E_tests/cypress/page-objects/header_menu_page";

import{ 
    swith_to_event_page,
}from "/Users/dgirotti/E2E_tests/cypress/page-objects/left_menu_page";

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
        complete_music_basic_info_page(EVENT_NAME)
        cy.wait(8000)
        details_page()
        cy.wait(5000);
        create_ga_tickets()
        create_music_ticket_form()
        save_ticket_form()
        publish_event()
        close_publish_popup()
        swith_to_event_page()
        logout(USER_NAME) 
	})	

})