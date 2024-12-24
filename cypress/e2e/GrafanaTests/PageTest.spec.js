const { expandSection} = require('./Additional/Functions/PageTestFunction.js')
const { sections } = require('./Additional/Selectors/MainSelectors.js')
const { Login} = require('./Additional/Functions/LoginTestFunction.js')
const { MainPage } = require('./Additional/Classes/MainPage.js')

describe("Navigation for MainPage", () => {

        beforeEach(() => {
            Login();
            sections.forEach(label => expandSection(label));
          });

        it("User successfully navigate to dashboard links", () => {
            MainPage.goToDashboardLinks();
        });

        it("User successfully navigate to alerting links", () => {
            MainPage.goToAlertingLinks();
        });

        it("User successfully navigate to admin links", () => {
            MainPage.goToAdminLinks();
        });

        it("User successfully using search", () => {
            MainPage.Searching();
        });
});

