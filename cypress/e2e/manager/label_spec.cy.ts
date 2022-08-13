import '@testing-library/cypress/add-commands';

describe('Label Manager', function () {
    beforeEach(function () {
        cy.home();
        cy.fixture('selector').then((selector) => {
            this.selector = selector;
        });
    });

    it('should create a label', function () {
        const action = this.selector.action;
        const manager = this.selector.manager;

        cy.get(manager.label)
            .should('exist')
            .click();

        cy.findByText(/labels/i)
            .should('exist');

        cy.get(action.label)
            .should('exist')
            .click();

        cy.get('input[placeholder="Enter label name"]')
            .should('exist')
            .type("Dog");
    });

    it ('should create a label and search for it', function () {
        const action = this.selector.action;
        const manager = this.selector.manager;

        cy.get(manager.label)
            .should('exist')
            .click();

        cy.findByText(/labels/i)
            .should('exist');

        cy.get(action.label)
            .should('exist')
            .click();

        cy.get('input[placeholder="Enter label name"]')
            .should('exist')
            .type("Dog");

        cy.get(action.label)
            .should('exist')
            .click();

        cy.get('input[placeholder="Enter label name"]')
            .then((it) => it[0])
            .should('exist')
            .type("Cat");

        cy.get('input[placeholder="Enter label name"]')
            .should('have.length', 2)

        cy.get('input[placeholder="Search"]')
            .should('exist')
            .type("Cat");

        cy.get('input[placeholder="Enter label name"]')
            .should('have.length', 1)
    })
});
