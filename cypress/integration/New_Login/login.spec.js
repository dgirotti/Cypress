/// <reference types="cypress" />

import {
    navigate,
    login_user,
    login_invalid_user,
    login_invalid_pass,
    required_password,
    forgot_password,
    required_login_fields,
    sign_up,
} from "/Users/dgirotti/E2E_tests/cypress/page-objects/login_page";

import {
    logout
} from "/Users/dgirotti/E2E_tests/cypress/page-objects/header_menu_page";


import {
    USER_EMAIL,
    USER_PASS,
    USER_NAME,
    WRONG_USER_EMAIL,
    WRONG_USER_PASS,
} from "/Users/dgirotti/E2E_tests/cypress/evb-constants/constants";

describe('Teemo New Login Flow', () => {

    beforeEach(() => {

        navigate();
        cy.wait(1000);
    })
    it('Login with a valid EB user account', () => {

        login_user(USER_EMAIL, USER_PASS);
        logout(USER_NAME);

    })
    
    it('Both required fields empty',()=>{

        required_login_fields();
    })
    it('Invalid User Name ', () => {

        login_invalid_user(WRONG_USER_EMAIL, USER_PASS);

    })

    it('Invalid Password', () => {

        login_invalid_pass(USER_EMAIL, WRONG_USER_PASS);
    })

    it('Password is Required error message', () => {

        required_password(USER_EMAIL);

    })
    it('Forgot Password Flow', () => {

        forgot_password(USER_EMAIL, WRONG_USER_PASS);

    })

    it('Sign Up Flow', () => {

        sign_up();

    })



})