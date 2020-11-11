/// <reference types="cypress" />

//const { expect } = require("chai")

describe('API Testing for Event Creation', () => {

    Cypress.config('baseUrl', 'https://www.evbqaapi.com/v3')

    it.only('POST - Create an evnet with body and not OAuth token. Should return a 401', () => {

        cy.request({
            method: 'POST',
            url: '/organizations/308883604143/events/',
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

    it('POST - Create an event with body and OAuth token. Should return a 200', () => {

        cy.request({
            method: 'POST',
            url: '/organizations/308883604143/events/?token=LYS2XV5OUFEJQD5IVFO3',
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
        }).its('status').should('eq', 200)

    })


    it('POST - Create a ticket. Should return a 200', () => {
        cy.request({
            method: 'POST',
            url: '/events/89362478579/ticket_classes/?token=LYS2XV5OUFEJQD5IVFO3',
            headers: {
                "Content_type": "application/json"
            },
            body: {

                "ticket_class": {
                    "name": "Ticket From API",
                    "maximum_quantity": 0,
                    "cost": "USD,10000",
                    "quantity_total": 10,
                    "sales_start": "",
                    "sales_end": "",
                    "hide_sale_dates": false,
                    "auto_hide_before": "",
                    "auto_hide_after": ""
                }
            },
            failOnStatusCode: false
        }).its('status').should('eq', 200)

    })

    it('POST - Unpublish the event. Should return a 200', () => {

        cy.request({
            method: 'POST',
            url: '/events/89362478579/unpublish/?token=LYS2XV5OUFEJQD5IVFO3',
            failOnStatusCode: false
        }).its('status').should('eq', 200)

    })
    it('POST - Publish an event. Should return a 200', () => {

        cy.request({
            method: 'POST',
            url: '/events/89362478579/publish/?token=LYS2XV5OUFEJQD5IVFO3',
            failOnStatusCode: false
        }).its('status').should('eq', 200)

    })

    it('POST - Copy an event. Should return a 200', () => {

        cy.request({
            method: 'POST',
            url: '/events/89362478579/copy/?token=LYS2XV5OUFEJQD5IVFO3',
            failOnStatusCode: false
        }).its('status').should('eq', 200)  

    })

})
