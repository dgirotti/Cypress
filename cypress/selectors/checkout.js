const domSelectors = {
    
    checkoutTicketsSelector: {
        ticketSelects: '.eds-field-styled__select',
    },
    checkoutPage: {
        actionButton: '[data-automation="eds-modal__primary-button"]',
        confirmationPage:
            '[data-automation="checkout-widget-purchase-confirmation-page"]',
    },
    checkoutContactInformation: {
        email: '[data-automation="checkout-form-N-email"]',
        emailConfirmation: '[name="buyer.confirmEmailAddress"]',
        firstName: '[data-automation="checkout-form-N-first_name"]',
        lastName: '[data-automation="checkout-form-N-last_name"]',
    },
    checkoutPaymentMethod: {
        cardHolder: '[data-automation="cardholder-field"]',
        cardNumber: '[data-automation="credit-card-field"]',
        csc: '[data-automation="card-security-code-field"]',
        expirationDate: '[data-automation="card-expiration-date-field"]',
        zipPostal: '[data-automation="card-postal-code-field"]',
    },
};

export default domSelectors;
