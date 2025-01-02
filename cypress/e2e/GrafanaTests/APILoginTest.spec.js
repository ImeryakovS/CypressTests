const { APIUsersPage } = require("./Additional/Classes/APIUsersPage");

describe ("API tests", () => {
    it ("User successfully created with API methods and deleted user after", () => {
        APIUsersPage.createApiUser()
            .then (() => {
                APIUsersPage.deleteApiUser()
            })
    })
})