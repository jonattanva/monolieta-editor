describe('Import resources', () => {
    const openResourcesManager = () => {
        cy.fixture('selector').then((selector) => {
            cy.findByTestId(selector['Project']).as('project');
            cy.get('@project').should('exist');
            cy.get('@project').click();

            cy.findByTestId(selector['Open import resources']).as('manager');
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

    it('should import image', function () {
        openResourcesManager();

        cy.get('input[type="file"]').attachFile('resources/001.jpg');

        cy.findByText(/viewing 1 resources/i).should('exist');

        cy.get(this.selector['List resources']).should('have.length', 1);
    });

    it('should import the image and select it', function () {
        openResourcesManager();

        cy.get('input[type="file"]').attachFile('resources/001.jpg');
        cy.get('input[type="file"]').attachFile('resources/002.jpeg');

        cy.findByText(/viewing 2 resources/i).should('exist');

        cy.findAllByRole(this.selector['Image'])
            .then((it) => it[0])
            .as('row');

        cy.get('@row').should('be.visible');
        cy.get('@row').click();

        cy.findByTestId(this.selector['Image editor']).should('be.visible');
    });
});
