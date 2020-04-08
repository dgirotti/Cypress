/// <reference types="cypress" />

import { 
	navigate,
    login_music_user,
    create_event,
    complete_basic_info_page,
	//logout,

 } from "/Users/dgirotti/E2E_tests/cypress/page-objects/eventbrite-page";
	
describe('Music Create Event Happy Flow', () =>{

	before (() => {
        navigate()   // abre la pagina de evbqa.com/sigin            
        })
    
    it('Should login using a Music User', () =>{

		
        login_music_user('dgirotti+cypress@eventbrite.com','12345678') // con un usuario valido. 
        
	})	
    
    it ('Should click on Create Event Button on the header',() =>{

        create_event()

    })

    it ('Should fill the basic info form and save',() =>{

        complete_basic_info_page()

    })

   

     // it('Should logout', () =>{

     //  logout() 

//	})	

})