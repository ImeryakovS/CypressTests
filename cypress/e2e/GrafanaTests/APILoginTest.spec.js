const { APIUsersPage } = require("./Additional/Classes/APIUsersPage");
const {  roles } = require('./Additional/Selectors/APILoginSelectors');

describe ("API tests", () => {
    it ("User successfully created with API methods", () => {
        APIUsersPage.createApiUser()
    })

    it ("User successfully deleted with API methods", () => {
        APIUsersPage.deleteApiUser()
    })
})