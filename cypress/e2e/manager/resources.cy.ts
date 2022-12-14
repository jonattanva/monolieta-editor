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
});
