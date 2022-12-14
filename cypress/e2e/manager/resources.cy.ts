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
});
