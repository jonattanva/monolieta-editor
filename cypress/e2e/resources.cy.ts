describe('Resources', () => {
    beforeEach(function () {
        cy.home();
        cy.fixture('selector').then((selector) => {
            this.selector = selector;
        });
    });

    it('should close the menu', function () {
        cy.findByTestId(this.selector['menu']).as('menu');
        cy.get('@menu').should('be.visible');
        cy.get('@menu').click();

        cy.findByTestId(this.selector['import resource']).as('import-resource');
        cy.get('@import-resource').should('be.visible');

        cy.get('body').type('{esc}');
        cy.get('@import-resource').should('not.exist');
    });

    it('should import video', function () {
        cy.findByTestId(this.selector['menu']).as('menu');
        cy.get('@menu').should('be.visible');
        cy.get('@menu').click();

        cy.findByText(/showing 0 of 0 items/i).should('be.visible');

        cy.findByTestId(this.selector['import resource']).as('import-resource');
        cy.get('@import-resource').should('be.visible');
        cy.get('@import-resource').click();

        cy.get('input[type=file]').selectFile(
            './cypress/fixtures/resources/003.mp4',
            {
                force: true
            }
        );

        cy.get(this.selector['list resources']).as('list');
        cy.get('@list').should('have.length', 1);

        cy.findByText(/showing 1 of 1 items/i).should('be.visible');
    });

    it('should import image', function () {
        cy.findByTestId(this.selector['menu']).as('menu');
        cy.get('@menu').should('be.visible');
        cy.get('@menu').click();

        cy.findByText(/showing 0 of 0 items/i).should('be.visible');

        cy.findByTestId(this.selector['import resource']).as('import-resource');
        cy.get('@import-resource').should('be.visible');
        cy.get('@import-resource').click();

        cy.get('input[type=file]').selectFile(
            './cypress/fixtures/resources/001.jpg',
            {
                force: true
            }
        );

        cy.get(this.selector['list resources']).as('list');
        cy.get('@list').should('have.length', 1);

        cy.findByText(/showing 1 of 1 items/i).should('be.visible');
    });
});
