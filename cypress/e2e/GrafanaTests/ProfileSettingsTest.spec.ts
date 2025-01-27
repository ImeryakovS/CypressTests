import {MainPage} from "./Additional/Classes/MainPage";
import {APIUsersPage} from "./Additional/Classes/APIUsersPage";

describe ("Tests for user profile", () => {
    it ("User successfully created with API methods, login and check profile settings", () => {
        APIUsersPage.createApiUser()
            .then (() => MainPage.editProfile())
            .then (() => APIUsersPage.deleteApiUser() )
    })
})