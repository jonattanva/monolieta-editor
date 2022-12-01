describe('Label', () => {
    const openClassManager = () => {
        cy.fixture('selector').then((selector) => {
            cy.findByTestId(selector['Project']).should('exist').click();
            cy.findByTestId(selector['Open label']).should('exist').click();

            cy.findByText(/labels/i).should('exist');
        });
    };

    beforeEach(function () {
        cy.home();
        cy.fixture('selector').then((selector) => {
            this.selector = selector;
        });
        // cy.wait(5000); // svelte-kit!
    });

    it('should close label manager', function () {
        openClassManager();

        cy.findByTestId(this.selector['Close label']).should('exist').click();

        cy.findByText(/labels/i).should('not.exist');
    });

    it('should sort label (desc)', function () {
        openClassManager();

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

        cy.get(this.selector['List label']).should('have.length', 3);

        cy.findByTestId(this.selector['Menu label']).should('be.visible').click();

        cy.findByRole('button', { name: /descending/i })
            .should('be.visible')
            .click();

        cy.get(`[aria-rowindex='0'] input[placeholder='Enter label name']`).should(
            'have.value',
            'Lion'
        );

        cy.get(`[aria-rowindex='1'] input[placeholder='Enter label name']`).should(
            'have.value',
            'Dog'
        );

        cy.get(`[aria-rowindex='2'] input[placeholder='Enter label name']`).should(
            'have.value',
            'Cat'
        );
    });

    it('should sort label (asc)', function () {
        openClassManager();

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

        cy.get(this.selector['List label']).should('have.length', 3);

        cy.findByTestId(this.selector['Menu label']).should('be.visible').click();

        cy.findByRole('button', { name: /ascending/i })
            .should('be.visible')
            .click();

        cy.get(`[aria-rowindex='0'] input[placeholder='Enter label name']`).should(
            'have.value',
            'Cat'
        );

        cy.get(`[aria-rowindex='1'] input[placeholder='Enter label name']`).should(
            'have.value',
            'Dog'
        );

        cy.get(`[aria-rowindex='2'] input[placeholder='Enter label name']`).should(
            'have.value',
            'Lion'
        );
    });

    it('should search the label', function () {
        openClassManager();

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

        cy.get(this.selector['List label']).should('have.length', 2);

        cy.findByTestId(this.selector['Search label']).should('be.visible').click().type('Lion');

        cy.findByText(/no labels found/i).should('be.visible');

        cy.findByTestId(this.selector['Search label'])
            .should('be.visible')
            .click()
            .clear()
            .type('Dog');

        cy.get(this.selector['List label']).should('have.length', 1);

        cy.findByTestId(this.selector['Search label']).should('be.visible').click().clear();

        cy.get(this.selector['List label']).should('have.length', 2);
    });

    it('should create a new label', function () {
        openClassManager();

        cy.findByTestId(this.selector['New label']).should('exist').click();

        cy.findByPlaceholderText(this.selector['Enter label name'])
            .should('be.visible')
            .click()
            .type('Dog');

        cy.findByText(/a label that gives information about your annotation/i).should('not.exist');

        cy.get(this.selector['List label']).should('have.length', 1);
    });

    it('should create a new label from empty message', function () {
        openClassManager();

        cy.findByTestId(this.selector['New label optional']).should('be.visible').click();

        cy.get(this.selector['List label']).should('have.length', 1);
    });

    it.skip('should export json file', function () {
        openClassManager();

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

        cy.get(this.selector['List label']).should('have.length', 3);

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

    it.skip('should export csv file', function () {
        openClassManager();

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

        cy.get(this.selector['List label']).should('have.length', 3);

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

    it.skip('should import csv file', function () {
        openClassManager();

        cy.findByTestId(this.selector['Menu label']).should('be.visible').click();

        cy.findByRole('button', { name: /import/i })
            .should('be.visible')
            .click();

        cy.get('input[type="file"]').attachFile('import/label.csv');

        cy.findByRole('button', { name: /import/i })
            .should('be.visible')
            .click();

        cy.get(this.selector['List label']).should('have.length', 2);
    });

    it.skip('should import json file', function () {
        openClassManager();

        cy.findByTestId(this.selector['Menu label']).should('be.visible').click();

        cy.findByRole('button', { name: /import/i })
            .should('be.visible')
            .click();

        cy.get('input[type="file"]').attachFile('import/label.json');

        cy.findByRole('button', { name: /import/i })
            .should('be.visible')
            .click();

        cy.get(this.selector['List label']).should('have.length', 2);
    });

    it.skip('should validate the form to import', function () {
        openClassManager();

        cy.findByTestId(this.selector['Menu label']).should('be.visible').click();

        cy.findByRole('button', { name: /import/i })
            .should('be.visible')
            .click();

        cy.get('input[type="file"]').attachFile('import/label.csv');

        cy.findByTestId(this.selector['External field id']).should('be.visible').click();

        cy.findByTestId(this.selector['External field name']).should('be.visible').click();

        cy.findByTestId(this.selector['External field color']).should('be.visible').click();

        cy.findByRole('button', { name: /import/i })
            .should('be.visible')
            .should('be.disabled');
    });

    it.skip('should duplicate the label', function () {
        openClassManager();

        cy.findByTestId(this.selector['New label']).should('exist').click();

        cy.findByPlaceholderText(this.selector['Enter label name'])
            .should('be.visible')
            .click()
            .type('Dog');

        cy.get(this.selector['List label']).should('have.length', 1);

        cy.findByTestId(this.selector['More']).should('be.visible').click();

        cy.findByRole('button', { name: /duplicate/i })
            .should('be.visible')
            .click();

        cy.get(this.selector['List label']).should('have.length', 2);
    });

    it.skip('should remove the label', function () {
        openClassManager();

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

        cy.get(this.selector['List label']).should('have.length', 2);

        cy.findAllByTestId(this.selector['More'])
            .then((it) => it[1])
            .should('be.visible')
            .click();

        cy.findByRole('button', { name: /delete/i })
            .should('be.visible')
            .click();

        cy.get(this.selector['List label']).should('have.length', 1);
    });
});
