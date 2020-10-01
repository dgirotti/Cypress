/// <reference types="cypress" />

// PUBLISH THE EVENT

export function publish_event(){
      
    cy.wait(10000);
    cy.contains('Publish Event').trigger('mouseover');
    cy.contains('Publish Now').click();
    cy.wait(5000);
    
}

// CLOSE FACEBOK POP UP  

export function close_publish_popup(){

cy.wait(5000);
cy.get('.eds-modal__container')  //data-spec="eds-modal__main"
        .should('exist')    
        .get('.eds-modal__content__children')
        .should('exist')
        .as('Congratulations');

cy.get('@Congratulations')
.get('[data-automation="modal-close-button"]').as('close');
cy.get('@close').should('exist').click();
cy.wait(2000);
}  

//CHANGE EVENT STATUS TO CANCELED

export function change_status_to_canceled(){

    cy.wait(2000);
    cy.contains('On Sale').trigger('mouseover');
    cy.contains('Change Status').click();
    cy.wait(3000);
    cy.get('#statusCode').select('Canceled');
    cy.contains('Take Off Sale').click();
    cy.wait(3000); 
    //cy.get(':nth-child(1) > :nth-child(1) > document-fragment > .eds-dropdown-menu > .eds-dropdown-menu__link > .eds-dropdown-menu__contents').should('have.text', 'Canceled');
    cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .eds-dropdown-menu > .eds-dropdown-menu__link').should('have.text', 'Canceled');
    
}
//CHANGE EVENT STATUS TO POSTPONED

export function change_status_to_postponed(){

    cy.wait(2000);
    //cy.get(':nth-child(1) > :nth-child(1) > document-fragment > .eds-dropdown-menu > .eds-dropdown-menu__link > .eds-dropdown-menu__contents').should('have.text', 'On Sale');
    cy.contains('On Sale').trigger('mouseover');
    cy.contains('Change Status').click();
    cy.wait(3000);
    cy.get('#statusCode').select('Postponed');
    cy.contains('Take Off Sale').click();
    cy.wait(3000); 
    cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .eds-dropdown-menu > .eds-dropdown-menu__link').should('have.text', 'Postponed');
}


// LOG OUT OF EVBQA.COM

export function logout(USER_NAME){

    cy.contains(USER_NAME).trigger('mouseover');//Selecciona en el header para mostrar las opciones del log out

    cy.contains("Log out").click();

    cy.url().should('include', '/signin');
 
}