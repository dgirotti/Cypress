/// <reference types="cypress" />
	
export function navigate() {
	
    cy.visit('/') ;

}

export function login_music_user(user,pass){

    cy.get('#email',{timeout: 2000}).type(user)
    cy.contains('Get Started', { timeout: 1000}).should('be.visible').click() // wait up to few seconds for this 'button' to exist       
    cy.get('#password',{timeout: 2000}).type(pass) 
    cy.contains("Log In", { timeout: 1000 }).should('be.visible').click() // wait up to few seconds for this 'button' to exist   
    
}

export function create_event(){

    cy.viewport('macbook-15')
    cy.wait(200)
    cy.contains('Create Event').click()

}

export function complete_basic_info_page(){

    const EVENT_TITLE = 'Music E2E Test'
    cy.url().should('include', 'manage/events/create');
    cy.get('#musicBasicInfo-title').clear().type(EVENT_TITLE).invoke('attr', 'value').should('contain', EVENT_TITLE);
    //cy.get('#BasicInfo-venue').contains('option', 'Testing Venue'); //Select venue from combo
    
    const EVENT_DATE = Cypress.moment().add(10, 'days').add(1, 'month').format('MM/DD/YYYY');
    const EVENT_END_DATE = Cypress.moment().add(12, 'days').add(1, 'month').format('MM/DD/YYYY');
    const EVENT_START_TIME = Cypress.moment('3:00 PM', 'LT');
    const EVENT_END_TIME = Cypress.moment('5:00 PM', 'LT');

    cy.get('#musicBasicInfo-startDate').type(EVENT_DATE).invoke('attr', 'value').should('contain', EVENT_DATE);
    cy.get('#musicBasicInfo-endDate').type(EVENT_END_DATE).invoke('attr', 'value').should('contain', EVENT_END_DATE);

    //cy.get('[data-spec="event-page-action-save"]').contains('Save & Continue').click(); 
    
    
}

export function logout(){

    cy.get('[data-reactid="37"] > .eds-dropdown-menu > .eds-dropdown-menu__link > .eds-dropdown-menu__icon > .eds-vector-image > svg',{timeout: 5000}).click() //Selecciona en el header para mostrar las opciones del log out

    cy.contains("Log out").click();
 
 }