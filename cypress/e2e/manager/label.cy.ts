import '@testing-library/cypress/add-commands';

describe('Label', () => {
    beforeEach(function () {
        cy.home();
        cy.fixture('selector').then((selector) => {
            this.selector = selector;
        });
        cy.wait(3000); // svelte-kit!
    });

    it('should sort label (desc)', function () {
        cy.findByText(/labels/i).should('exist');

        cy.findByTestId(this.selector['New label']).should('exist').click();

        cy.findByPlaceholderText(this.selector['Enter label name'])
            .should('be.visible')
            .click()
            .type('Dog');

        cy.findByTestId(this.selector['New label']).should('exist').click();

        cy.findAllByPlaceholderText(this.selector['Enter label name'])
            .then((it) => it[0])
            .should('be.visible')
            .click()
            .type('Lion');

        cy.findByTestId(this.selector['New label']).should('exist').click();

        cy.findAllByPlaceholderText(this.selector['Enter label name'])
            .then((it) => it[0])
            .should('be.visible')
            .click()
            .type('Cat');

        cy.get(`${this.selector['List label']} > li`).should('have.length', 3);

        cy.findByTestId(this.selector['Menu label']).should('be.visible').click();

        cy.findByRole('button', { name: /descending/i })
            .should('be.visible')
            .click();

        cy.get(
            '[aria-label="list-label"] > li:nth-child(1) input[placeholder="Enter label name"]'
        ).should('have.value', 'Lion');

        cy.get(
            '[aria-label="list-label"] > li:nth-child(2) input[placeholder="Enter label name"]'
        ).should('have.value', 'Dog');

        cy.get(
            '[aria-label="list-label"] > li:nth-child(3) input[placeholder="Enter label name"]'
        ).should('have.value', 'Cat');
    });

    it('should sort label (asc)', function () {
        cy.findByText(/labels/i).should('exist');

        cy.findByTestId(this.selector['New label']).should('exist').click();

        cy.findByPlaceholderText(this.selector['Enter label name'])
            .should('be.visible')
            .click()
            .type('Cat');

        cy.findByTestId(this.selector['New label']).should('exist').click();

        cy.findAllByPlaceholderText(this.selector['Enter label name'])
            .then((it) => it[0])
            .should('be.visible')
            .click()
            .type('Dog');

        cy.findByTestId(this.selector['New label']).should('exist').click();

        cy.findAllByPlaceholderText(this.selector['Enter label name'])
            .then((it) => it[0])
            .should('be.visible')
            .click()
            .type('Lion');

        cy.get(`${this.selector['List label']} > li`).should('have.length', 3);

        cy.findByTestId(this.selector['Menu label']).should('be.visible').click();

        cy.findByRole('button', { name: /ascending/i })
            .should('be.visible')
            .click();

        cy.get(
            '[aria-label="list-label"] > li:nth-child(1) input[placeholder="Enter label name"]'
        ).should('have.value', 'Cat');

        cy.get(
            '[aria-label="list-label"] > li:nth-child(2) input[placeholder="Enter label name"]'
        ).should('have.value', 'Dog');

        cy.get(
            '[aria-label="list-label"] > li:nth-child(3) input[placeholder="Enter label name"]'
        ).should('have.value', 'Lion');
    });

    it('should search the label', function () {
        cy.findByText(/labels/i).should('exist');

        cy.findByTestId(this.selector['New label']).should('exist').click();

        cy.findByPlaceholderText(this.selector['Enter label name'])
            .should('be.visible')
            .click()
            .type('Dog');

        cy.findByTestId(this.selector['More']).should('be.visible').click();

        cy.findByRole('button', { name: /duplicate/i })
            .should('be.visible')
            .click();

        cy.get(`${this.selector['List label']} > li`).should('have.length', 2);

        cy.findAllByPlaceholderText(this.selector['Enter label name'])
            .then((it) => it[0])
            .should('be.visible')
            .click()
            .clear()
            .type('Cat');

        cy.findByTestId(this.selector['Search label']).should('be.visible').click().type('Lion');

        cy.findByText(/no labels found/i).should('be.visible');

        cy.findByTestId(this.selector['Search label'])
            .should('be.visible')
            .click()
            .clear()
            .type('Dog');

        cy.get(`${this.selector['List label']} > li`).should('have.length', 1);

        cy.findByTestId(this.selector['Search label']).should('be.visible').click().clear();

        cy.get(`${this.selector['List label']} > li`).should('have.length', 2);
    });

    it('should duplicate the label', function () {
        cy.findByText(/labels/i).should('exist');

        cy.findByTestId(this.selector['New label']).should('exist').click();

        cy.findByPlaceholderText(this.selector['Enter label name'])
            .should('be.visible')
            .click()
            .type('Dog');

        cy.get(`${this.selector['List label']} > li`).should('have.length', 1);

        cy.findByTestId(this.selector['More']).should('be.visible').click();

        cy.findByRole('button', { name: /duplicate/i })
            .should('be.visible')
            .click();

        cy.get(`${this.selector['List label']} > li`).should('have.length', 2);
    });

    it('should remove the label', function () {
        cy.findByText(/labels/i).should('exist');

        cy.findByTestId(this.selector['New label']).should('exist').click();

        cy.findByPlaceholderText(this.selector['Enter label name'])
            .should('be.visible')
            .click()
            .type('Dog');

        cy.findByTestId(this.selector['New label']).should('exist').click();

        cy.findAllByPlaceholderText(this.selector['Enter label name'])
            .then((it) => it[0])
            .should('be.visible')
            .click()
            .type('Cat');

        cy.get(`${this.selector['List label']} > li`).should('have.length', 2);

        cy.findAllByTestId(this.selector['More'])
            .then((it) => it[1])
            .should('be.visible')
            .click();

        cy.findByRole('button', { name: /delete/i })
            .should('be.visible')
            .click();

        cy.get(`${this.selector['List label']} > li`).should('have.length', 1);
    });

    it('should create a new label', function () {
        cy.findByText(/labels/i).should('exist');

        cy.findByTestId(this.selector['New label']).should('exist').click();

        cy.findByPlaceholderText(this.selector['Enter label name'])
            .should('be.visible')
            .click()
            .type('Dog');

        cy.findByText(/a label that gives information about your annotation/i).should('not.exist');

        cy.get(`${this.selector['List label']} > li`).should('have.length', 1);
    });

    it('should create a new label from empty message', function () {
        cy.findByText(/labels/i).should('exist');

        cy.findByTestId(this.selector['New label optional']).should('be.visible').click();

        cy.get(`${this.selector['List label']} > li`).should('have.length', 1);
    });

    it('should export json file', function () {
        cy.findByText(/labels/i).should('exist');

        cy.findByTestId(this.selector['New label']).should('exist').click();

        cy.findByPlaceholderText(this.selector['Enter label name'])
            .should('be.visible')
            .click()
            .type('Cat');

        cy.findByTestId(this.selector['New label']).should('exist').click();

        cy.findAllByPlaceholderText(this.selector['Enter label name'])
            .then((it) => it[0])
            .should('be.visible')
            .click()
            .type('Dog');

        cy.findByTestId(this.selector['New label']).should('exist').click();

        cy.findAllByPlaceholderText(this.selector['Enter label name'])
            .then((it) => it[0])
            .should('be.visible');

        cy.get(`${this.selector['List label']} > li`).should('have.length', 3);

        cy.findByTestId(this.selector['Menu label']).should('be.visible').click();

        cy.findByRole('button', { name: /export/i })
            .should('be.visible')
            .click();

        cy.findByTestId(this.selector['Export format']).should('be.visible').click();

        cy.get('[data-value="json"]').should('exist').click();

        cy.findByRole('button', { name: /export/i })
            .should('be.visible')
            .click();

        cy.readFile('./cypress/downloads/Untitled.json');
    });

    it('should export csv file', function () {
        cy.findByText(/labels/i).should('exist');

        cy.findByTestId(this.selector['New label']).should('exist').click();

        cy.findByPlaceholderText(this.selector['Enter label name'])
            .should('be.visible')
            .click()
            .type('Cat');

        cy.findByTestId(this.selector['New label']).should('exist').click();

        cy.findAllByPlaceholderText(this.selector['Enter label name'])
            .then((it) => it[0])
            .should('be.visible')
            .click()
            .type('Dog');

        cy.findByTestId(this.selector['New label']).should('exist').click();

        cy.findAllByPlaceholderText(this.selector['Enter label name'])
            .then((it) => it[0])
            .should('be.visible');

        cy.get(`${this.selector['List label']} > li`).should('have.length', 3);

        cy.findByTestId(this.selector['Menu label']).should('be.visible').click();

        cy.findByRole('button', { name: /export/i })
            .should('be.visible')
            .click();

        cy.findByTestId(this.selector['Export format']).should('be.visible').click();

        cy.get('[data-value="csv"]').should('exist').click();

        cy.findByRole('button', { name: /export/i })
            .should('be.visible')
            .click();

        cy.readFile('./cypress/downloads/Untitled.csv');
    });
});
