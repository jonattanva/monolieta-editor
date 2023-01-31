describe('Import resources', () => {
    const openResourcesManager = () => {
        cy.fixture('selector').then((selector) => {
            cy.findByTestId(selector['Project']).should('exist').click();
            cy.findByTestId(selector['Open import resources']).should('exist').click();
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
            .should('be.visible')
            .click();

        cy.findByTestId(this.selector['Image editor']).should('be.visible');
    });
});
