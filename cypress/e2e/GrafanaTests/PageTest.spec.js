const {
    expandSection,
    UsingSearch,
    navigateLinks } = require('./Additional/Functions/PageTestFunction.js')
const {
    dashboards,
    alerting,
    admin,
    sections } = require('./Additional/Selectors/MainSelectors.js')
const { Login} = require('./Additional/Functions/LoginTestFunction.js')

describe("Navigation", () => {

        beforeEach(() => {
            cy.visit("http://localhost:3000/login")
            Login();
            sections.forEach(label => expandSection(label));
          });
        
        //dashboards
        it("navigate to dashboard links", () => {
            navigateLinks(dashboards);
        });

        //alerting
        it("navigate to alerting links", () => {
            navigateLinks(alerting);
        });

        //admin
        it("navigate to admin links", () => {
        navigateLinks(admin);
        cy.contains('Extend the UI of plugins and Grafana').should('be.visible')
        });

        //search
        it("User successfully use search", () => {
            UsingSearch("playlists");
        });
});

