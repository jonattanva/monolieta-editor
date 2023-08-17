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

        cy.get('input[type=file]').selectFile('resources/001.jpg');
        cy.get(this.selector['list resources']).should('have.length', 1);
    });
});
