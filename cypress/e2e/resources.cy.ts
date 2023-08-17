describe('Resources', () => {
    beforeEach(function () {
        cy.home();
        cy.fixture('selector').then((selector) => {
            this.selector = selector;
        });
    });

    it('should import image', function () {
        cy.findByTestId(this.selector['menu']).as('menu');
        cy.get('@menu').should('be.visible');
        cy.get('@menu').click();

        cy.findByTestId(this.selector['import resource']).as('import-resource');
        cy.get('@import-resource').should('be.visible');
        cy.get('@import-resource').click();

        cy.get('input[type=file]').selectFile('./cypress/fixtures/resources/001.jpg', {
            force: true
        });

        cy.get(this.selector['list resources']).as('list');
        cy.get('@list').should('have.length', 1);
    });

    it('should import image and seach', function () {
        cy.findByTestId(this.selector['menu']).as('menu');
        cy.get('@menu').should('be.visible');
        cy.get('@menu').click();

        cy.findByTestId(this.selector['import resource']).as('import-resource');
        cy.get('@import-resource').should('be.visible');
        cy.get('@import-resource').click();

        cy.get('input[type=file]').selectFile('./cypress/fixtures/resources/001.jpg', {
            force: true,
            action: 'select'
        });

        cy.get('input[type=file]').selectFile('./cypress/fixtures/resources/002.jpeg', {
            force: true,
            action: 'select'
        });

        cy.get(this.selector['list resources']).as('list');
        cy.get('@list').should('have.length', 2);

        cy.findByTestId(this.selector['search']).as('search');
        cy.get('@search').should('be.visible');
        cy.get('@search').clear();
        cy.get('@search').type('002');

        cy.get('@list').should('have.length', 1);
    });
});
