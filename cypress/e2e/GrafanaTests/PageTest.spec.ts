import {MainPage} from './Additional/Classes/MainPage';
import {expandSection} from './Additional/Functions/PageTestFunction';
import {sections} from './Additional/Selectors/MainSelectors';
import {login} from './Additional/Functions/LoginTestFunction';
import {credentials} from './Additional/Selectors/LoginSelectors';

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

