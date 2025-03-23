import {login} from "./Additional/Functions/LoginTestFunction";
import {credentials} from "./Additional/Selectors/LoginSelectors";

describe ("Check external links", ()=> {

    beforeEach(() => {
        login(credentials.username,credentials.password);
    })

    it ("Check main links", () => {

    })
})