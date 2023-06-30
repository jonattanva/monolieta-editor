describe('Label Manager', () => {
    const openClassManager = () => {
        cy.fixture('selector').then((selector) => {
            cy.findByTestId(selector['Project']).as('project');
            cy.get('@project').should('exist');
            cy.get('@project').click();

            cy.findByTestId(selector['Open label']).as('manager');
            cy.get('@manager').should('exist');
            cy.get('@manager').click();
        });
    };

    beforeEach(function () {
        cy.home();
        cy.fixture('selector').then((selector) => {
            this.selector = selector;
        });
    });

    it('should close label manager', function () {
        openClassManager();

        cy.findByTestId(this.selector['Close label']).as('close');
        cy.get('@close').should('exist');
        cy.get('@close').click();

        cy.findByText(/labels/i).should('not.exist');
    });

    it('should sort label (desc)', function () {
        openClassManager();

        cy.findByTestId(this.selector['New label']).as('new');
        cy.get('@new').should('exist');
        cy.get('@new').click();

        cy.findByPlaceholderText(this.selector['Enter label name']).as('input');
        cy.get('@input').should('be.visible');
        cy.get('@input').click();
        cy.get('@input').type('Dog');

        cy.get('@new').should('exist');
        cy.get('@new').click();

        cy.findAllByPlaceholderText(this.selector['Enter label name'])
            .then((it) => it[0])
            .as('row');

        cy.get('@row').should('be.visible');
        cy.get('@row').click();
        cy.get('@row').type('Lion');

        cy.get('@new').should('exist');
        cy.get('@new').click();

        cy.get('@row').should('be.visible');
        cy.get('@row').click();
        cy.get('@row').type('Cat');

        cy.get(this.selector['List labels']).should('have.length', 3);

        cy.findByTestId(this.selector['Menu label']).as('menu');
        cy.get('@menu').should('be.visible');
        cy.get('@menu').click();

        cy.findByRole('button', { name: /descending/i }).as('descending');
        cy.get('@descending').should('be.visible');
        cy.get('@descending').click();

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

        cy.findByTestId(this.selector['New label']).as('new');
        cy.get('@new').should('exist');
        cy.get('@new').click();

        cy.findByPlaceholderText(this.selector['Enter label name']).as('input');
        cy.get('@input').should('be.visible');
        cy.get('@input').click();
        cy.get('@input').type('Cat');

        cy.get('@new').should('exist');
        cy.get('@new').click();

        cy.findAllByPlaceholderText(this.selector['Enter label name'])
            .then((it) => it[0])
            .as('input');

        cy.get('@input').should('be.visible');
        cy.get('@input').click();
        cy.get('@input').type('Dog');

        cy.get('@new').should('exist');
        cy.get('@new').click();

        cy.get('@input').should('be.visible');
        cy.get('@input').click();
        cy.get('@input').type('Lion');

        cy.get(this.selector['List labels']).should('have.length', 3);

        cy.findByTestId(this.selector['Menu label']).as('menu');
        cy.get('@menu').should('be.visible');
        cy.get('@menu').click();

        cy.findByRole('button', { name: /ascending/i }).as('ascending');
        cy.get('@ascending').should('be.visible');
        cy.get('@ascending').click();

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

        cy.findByTestId(this.selector['New label']).as('new');
        cy.get('@new').should('exist');
        cy.get('@new').click();

        cy.findByPlaceholderText(this.selector['Enter label name']).as('input');
        cy.get('@input').should('be.visible');
        cy.get('@input').click();
        cy.get('@input').type('Cat');

        cy.get('@new').should('exist');
        cy.get('@new').click();

        cy.findAllByPlaceholderText(this.selector['Enter label name'])
            .then((it) => it[0])
            .as('row');

        cy.get('@row').should('be.visible');
        cy.get('@row').click();
        cy.get('@row').type('Dog');

        cy.get(this.selector['List labels']).should('have.length', 2);

        cy.findByTestId(this.selector['Search label']).as('search');
        cy.get('@search').should('be.visible');
        cy.get('@search').click();
        cy.get('@search').type('Lion');

        cy.findByText(/no labels found/i).should('be.visible');

        cy.get('@search').should('be.visible');
        cy.get('@search').click();
        cy.get('@search').clear();
        cy.get('@search').type('Dog');

        cy.get(this.selector['List labels']).should('have.length', 1);

        cy.get('@search').should('be.visible');
        cy.get('@search').click();
        cy.get('@search').clear();

        cy.get(this.selector['List labels']).should('have.length', 2);
    });

    it('should create a new label', function () {
        openClassManager();

        cy.findByTestId(this.selector['New label']).as('new');
        cy.get('@new').should('exist');
        cy.get('@new').click();

        cy.findByPlaceholderText(this.selector['Enter label name']).as('input');
        cy.get('@input').should('be.visible');
        cy.get('@input').click();
        cy.get('@input').type('Dog');

        cy.findByText(/a label that gives information about your annotation/i).should('not.exist');

        cy.get(this.selector['List labels']).should('have.length', 1);
    });

    it('should create a new label from empty message', function () {
        openClassManager();

        cy.findByTestId(this.selector['New label optional']).as('input');
        cy.get('@input').should('be.visible');
        cy.get('@input').click();

        cy.get(this.selector['List labels']).should('have.length', 1);
    });

    it('should duplicate the label', function () {
        openClassManager();

        cy.findByTestId(this.selector['New label']).as('new');
        cy.get('@new').should('exist');
        cy.get('@new').click();

        cy.findByPlaceholderText(this.selector['Enter label name']).as('input');
        cy.get('@input').should('be.visible');
        cy.get('@input').click();
        cy.get('@input').type('Dog');

        cy.get(this.selector['List labels']).should('have.length', 1);

        cy.findByTestId(this.selector['More']).as('more');
        cy.get('@more').should('be.visible');
        cy.get('@more').click();

        cy.findByRole('button', { name: /duplicate/i }).as('duplicate');
        cy.get('@duplicate').should('be.visible');
        cy.get('@duplicate').click();

        cy.get(this.selector['List labels']).should('have.length', 2);
    });

    it('should remove the label', function () {
        openClassManager();

        cy.findByTestId(this.selector['New label']).as('new');
        cy.get('@new').should('exist');
        cy.get('@new').click();

        cy.findByPlaceholderText(this.selector['Enter label name']).as('input');
        cy.get('@input').should('be.visible');
        cy.get('@input').click();
        cy.get('@input').type('Dog');

        cy.get('@new').should('exist');
        cy.get('@new').click();

        cy.findAllByPlaceholderText(this.selector['Enter label name'])
            .then((it) => it[0])
            .as('row');

        cy.get('@row').should('be.visible');
        cy.get('@row').click();
        cy.get('@row').type('Cat');

        cy.get(this.selector['List labels']).should('have.length', 2);

        cy.findAllByTestId(this.selector['More'])
            .then((it) => it[1])
            .as('more');

        cy.get('@more').should('be.visible');
        cy.get('@more').click();

        cy.findByRole('button', { name: /delete/i }).as('delete');
        cy.get('@delete').should('be.visible');
        cy.get('@delete').click();

        cy.findByRole('button', { name: /delete/i }).as('action');
        cy.get('@action').should('be.visible');
        cy.get('@action').click();

        cy.get(this.selector['List labels']).should('have.length', 1);
    });
});
