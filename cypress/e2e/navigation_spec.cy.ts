import '@testing-library/cypress/add-commands';

describe('Navigation', function () {
    beforeEach(function () {
        cy.home();
        cy.fixture('selector').then((selector) => {
            this.selector = selector;
        });
    });

    it('should navigate to the label manager', function () {
        const manager = this.selector.manager;

        cy.get(manager.label)
            .should('exist')
            .click();

        cy.findByText(/labels/i)
            .should('exist');
    })

    it('should navigate to the resource manager', function () {
        const manager = this.selector.manager;

        cy.get(manager.resource)
            .should('exist')
            .click();

        cy.findByText(/resources/i)
            .should('exist');
    })

    it ('should open and close the panel', function () {
        const manager = this.selector.manager;

        cy.get(manager.resource)
            .should('exist')
            .click();

        cy.findByText(/resources/i)
            .should('exist');

        cy.get(manager.resource)
            .should('exist')
            .click();

        cy.findByText(/resources/i)
            .should('not.exist');
    })
});
