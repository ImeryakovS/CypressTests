const { MainPage } = require("./Additional/Classes/MainPage");
const { APIUsersPage } = require("./Additional/Classes/APIUsersPage");

describe ("Tests for user profile", () => {
    it ("User successfully created with API methods, login and check profile settings", () => {
        APIUsersPage.createApiUser()
            .then (() => MainPage.editProfile())
            .then (() => APIUsersPage.deleteApiUser() )
    })
})