
/// <reference types="cypress" />

export function create_event(){

    cy.wait(2000)
    cy.contains('Create Event').click()
    

}

