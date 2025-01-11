const { MainPage } = require('./Additional/Classes/MainPage.ts')
const { expandSection} = require('./Additional/Functions/PageTestFunction.ts')
const { sections } = require('./Additional/Selectors/MainSelectors.ts')
const { login } = require('./Additional/Functions/LoginTestFunction.ts')
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

