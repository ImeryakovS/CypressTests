const { APILoginPage } = require("./Additional/Classes/APILoginPage");

describe ("API tests", () => {
    it ("User successfully created with API methods", () => {
        APILoginPage.createApiUser()
    })

    it ("User successfully deleted with API methods", () => {
        APILoginPage.deleteApiUser()
    })
})