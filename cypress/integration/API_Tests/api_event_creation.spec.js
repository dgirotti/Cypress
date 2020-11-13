/// <reference types="cypress" />

import {
    EBTOKEN,
    ORGID
} from "/Users/dgirotti/E2E_tests/cypress/evb-constants/constants";

describe('API Testing for Event Creation', () => {

    Cypress.config('baseUrl', 'https://www.evbqaapi.com/v3')

    it('POST - Try to Create an Event without OAuth token. Should return a 401', () => {

        cy.request({
            method: 'POST',
            url: '/organizations/' + ORGID + '/events/',
            headers: {
                "Content_type": "application/json"
            },
            body: {

                "event": {
                    "currency": "USD",
                    "start": {
                        "utc": "2020-11-29T00:00:00Z",
                        "timezone": "America/New_York"
                    },
                    "end": {
                        "utc": "2020-12-29T00:00:00Z",
                        "timezone": "America/New_York"
                    },
                    "name": {
                        "html": "Draft Event"
                    },
                    "description": {
                        "html": "<b> Testing a Draft API-Event</b>"
                    }

                }
            },
            failOnStatusCode: false
        }).its('status').should('eq', 401)

    })

    it('POST - Create an Publish an event. Then Unpublish it. Should return a 200', () => {

        cy.request({
            method: 'POST',
            url: '/organizations/' + ORGID + '/events/?token=' + EBTOKEN,
            headers: {
                "Content_type": "application/json"
            },
            body: {

                "event": {
                    "currency": "USD",
                    "start": {
                        "utc": "2020-11-29T00:00:00Z",
                        "timezone": "America/New_York"
                    },
                    "end": {
                        "utc": "2020-12-29T00:00:00Z",
                        "timezone": "America/New_York"
                    },
                    "name": {
                        "html": "Cypress Draft Event"
                    },
                    "description": {
                        "html": "<b> Testing a Draft API-Event</b>"
                    }

                }
            },
            failOnStatusCode: false
        }).then((resp) => {
            let id = resp.body.id;

            // Create a ticket type

            cy.request({
                method: 'POST',
                url: `/events/${id}/ticket_classes/?token=` + EBTOKEN,
                headers: {
                    "Content_type": "application/json"
                },
                body: {

                    "ticket_class": {
                        "name": "Ticket From API",
                        "maximum_quantity": 0,
                        "cost": "USD,1000",
                        "quantity_total": 100,
                        "sales_start": "",
                        "sales_end": "",
                        "hide_sale_dates": false,
                        "auto_hide_before": "",
                        "auto_hide_after": ""
                    }
                },
                failOnStatusCode: false
            }).its('status').should('eq', 200)

            // Publish the event

            cy.request({
                method: 'POST',
                url: `/events/${id}/publish/?token=` + EBTOKEN,
                failOnStatusCode: false
            }).its('status').should('eq', 200)

            // Unpublish the event

            cy.request({
                method: 'POST',
                url: `/events/${id}/unpublish/?token=` + EBTOKEN,
                failOnStatusCode: false
            }).its('status').should('eq', 200)


        })

    })

    it('POST - Create a Draft event, Copy; Cancel and Delete it. Should return a 200', () => {

        cy.request({
            method: 'POST',
            url: '/organizations/' + ORGID + '/events/?token=' + EBTOKEN,
            headers: {
                "Content_type": "application/json"
            },
            body: {

                "event": {
                    "currency": "USD",
                    "start": {
                        "utc": "2020-11-29T00:00:00Z",
                        "timezone": "America/New_York"
                    },
                    "end": {
                        "utc": "2020-12-29T00:00:00Z",
                        "timezone": "America/New_York"
                    },
                    "name": {
                        "html": "Cypress Draft Event"
                    },
                    "description": {
                        "html": "<b> Testing a Draft API-Event</b>"
                    }

                }
            },
            failOnStatusCode: false
        }).then((resp) => {
            let id = resp.body.id;

            // Copy the draft event

            cy.request({
                method: 'POST',
                url: `/events/${id}/copy/?token=` + EBTOKEN,
                failOnStatusCode: false

            }).its('status').should('eq', 200)

            //Cancel the event

            cy.request({
                method: 'POST',
                url: `/events/${id}/cancel/?token=` + EBTOKEN,
                failOnStatusCode: false

            }).its('status').should('eq', 200)

            // Delete the event

            cy.request({
                method: 'DELETE',
                url: `/events/${id}/?token=` + EBTOKEN,
                failOnStatusCode: false

            }).its('status').should('eq', 200)

        })

    })
})

