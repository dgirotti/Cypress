/// <reference types="cypress" />

// OPEN www.evbqa.com PAGE
export function navigate() {
    cy.visit('/signin');
    cy.title().should('include', 'Eventbrite - Log In or Sign Up')
    //cy.compareSnapshot("login");
}

// LOGIN USING A EVB ACCOUNT
export function login_user(USER_EMAIL, USER_PASS) {
    cy.get('#email', { timeout: 2000 }).type(USER_EMAIL);
    cy.get('[data-automation="signin-submit-button"]').click();
    //cy.contains('Sign in', { timeout: 1000}).should('be.visible').click() 
    cy.get('#password', { timeout: 2000 }).type(USER_PASS)
    cy.get('[data-automation="signin-submit-button"]').click();
}


// LOGIN VALIDATIONS FOR USER NAME
export function login_invalid_user(WRONG_USER_EMAIL, USER_PASS) {
    cy.get('#email', { timeout: 2000 }).type(WRONG_USER_EMAIL);
    cy.get('#password', { timeout: 2000 }).type(USER_PASS);
    cy.get('[data-automation="signin-submit-button"]').click();
    cy.get('.eds-field-styled__annotation').should('contain', 'Please enter a valid email address');

}


// LOGIN VALIDATIONS FOR USER PASS
export function login_invalid_pass(USER_EMAIL, WRONG_USER_PASS) {
    cy.get('#email', { timeout: 2000 }).type(USER_EMAIL);
    cy.get('#password', { timeout: 2000 }).type(WRONG_USER_PASS)
    cy.get('[data-automation="signin-submit-button"]').click();
    cy.get('.eds-field-styled__annotation').should('contain', 'Incorrect password');
}


// PASSWORD REQUIRED. 
export function required_password(USER_EMAIL) {
    cy.get('#email', { timeout: 2000 }).type(USER_EMAIL);
    cy.get('[data-automation="signin-submit-button"]').click();
    cy.get('.eds-field-styled__annotation').should('contain', 'Password is required');
}

// USER AND PASSWORD REQUIRED. 
export function required_login_fields() {
    cy.get('[data-automation="signin-submit-button"]').click();
    cy.get('.eds-field-styled__annotation').should('contain', 'Please enter a valid email address');
    cy.get('.eds-field-styled__annotation').should('contain', 'Password is required');
}


// FORGOT PASSWORD LINK
export function forgot_password(USER_EMAIL, WRONG_USER_PASS) {
    cy.get('#email', { timeout: 2000 }).type(USER_EMAIL);
    cy.get('#password', { timeout: 2000 }).type(WRONG_USER_PASS)
    cy.get('[data-automation="signin-submit-button"]').click();
    cy.get('.eds-field-styled__annotation').should('contain', 'Incorrect password');
    cy.contains('Forgot password').should('be.visible').click();
    cy.url().should('include', '/status/pass-reset');
    cy.contains('Check your email');
}

// SIGN UP PROCESS
export function sign_up(USER_EMAIL, WRONG_USER_PASS) {
cy.get('.eds-text-color--ui-800 > .eds-btn--button').click();
cy.url().should('include', '/signin/signup');
}

// LOGIN USING A FB ACCOUNT

export function login_fb() {

    cy.contains('Continue with Facebbok', { timeout: 1000 }).should('be.visible').click()

}

// LOGIN USING A MUSIC ACCOUNT

export function login_music_user(USER_EMAIL, USER_PASS) {
    cy.get('#email', { timeout: 5000 }).type(USER_EMAIL)
    cy.contains('Get Started', { timeout: 1000 }).should('be.visible').click() // wait up to few seconds for this 'button' to exist       
    cy.get('#password', { timeout: 2000 }).type(USER_PASS)
    cy.contains("Log In", { timeout: 1000 }).should('be.visible').click() // wait up to few seconds for this 'button' to exist   

}