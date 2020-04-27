/// <reference types="cypress" />

import {
    navigate,
    login_user,
} from "/Users/dgirotti/E2E_tests/cypress/page-objects/login_page";

import {
    BAZZINGA_USER_EMAIL,
    USER_PASS,
    EVENT_NAME,

} from "/Users/dgirotti/E2E_tests/cypress/evb-constants/constants";

import {
    complete_req_questions,
    package_questions_validations,
    skip,
    back
} from "/Users/dgirotti/E2E_tests/cypress/page-objects/package_question_page";


describe('Complete packege question', () => {

    beforeEach(() => {

        navigate()
        cy.wait(1000);
        login_user(BAZZINGA_USER_EMAIL, USER_PASS)
        cy.wait(1000);
        cy.visit('/onboarding/')

    })

    it('Should complete the requiered questions', () => {

        complete_req_questions(EVENT_NAME)
    })

    it('Should display the validations for required fields', () => {

        package_questions_validations(EVENT_NAME)
    })

    it('Should skip the process and go to basic info page', () => {
        skip()
    })

    it('Should skip the process and go to basic info page', () => {
        back(EVENT_NAME)
    })
})

