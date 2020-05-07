/// <reference types="cypress" />

// OPEN www.evbqa.com PAGE

export function navigate() {
	
    cy.visit('/signin') ;
    cy.title().should('include', 'Eventbrite - Log In or Sign Up')
    cy.compareSnapshot("login");
    
}

// LOGIN USING A MUSIC ACCOUNT

export function login_music_user(USER_EMAIL,USER_PASS){

    cy.get('#email',{timeout: 2000}).type(USER_EMAIL)
    cy.contains('Get Started', { timeout: 1000}).should('be.visible').click() // wait up to few seconds for this 'button' to exist       
    cy.get('#password',{timeout: 2000}).type(USER_PASS) 
    cy.contains("Log In", { timeout: 1000 }).should('be.visible').click() // wait up to few seconds for this 'button' to exist   
    
}

// LOGIN USING A BAZZINGA ACCOUNT

export function login_user(BAZZINGA_USER_EMAIL,USER_PASS){

    cy.get('#email',{timeout: 2000}).type(BAZZINGA_USER_EMAIL)
    cy.contains('Get Started', { timeout: 1000}).should('be.visible').click() 
    cy.get('#password',{timeout: 2000}).type(USER_PASS) 
    cy.contains("Log In", { timeout: 1000 }).should('be.visible').click()  
    
}