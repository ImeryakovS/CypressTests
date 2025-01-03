const { MainPage } = require('./Additional/Classes/MainPage.js')
const { expandSection} = require('./Additional/Functions/PageTestFunction.js')
const { sections } = require('./Additional/Selectors/MainSelectors.js')
const { login } = require('./Additional/Functions/LoginTestFunction.js')
const { credentials } = require('./Additional/Selectors/LoginSelectors');

describe("Navigation for MainPage", () => {

        beforeEach(() => {
            login(credentials.username,credentials.password);
            sections.forEach(label => expandSection(label));
          });

        it ("User successfully navigate to dashboard links", () => {
            MainPage.goToDashboardLinks();
        });

        it ("User successfully navigate to alerting links", () => {
            MainPage.goToAlertingLinks();
        });

        it ("User successfully navigate to admin links", () => {
            MainPage.goToAdminLinks();
        });

        it ("User successfully using search", () => {
            MainPage.Searching();
        });
});

